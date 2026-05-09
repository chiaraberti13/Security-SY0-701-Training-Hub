#!/usr/bin/env python3
"""Generate explanations for CompTIA Security+ questions missing them.

Strategy: accumulate all results in /tmp to avoid modifying questions.json
during claude subprocess calls (which would trigger the stop hook and corrupt
the output). Apply everything in one shot at the end.
"""

import json
import subprocess
import sys
import time

QUESTIONS_FILE = "src/data/questions.json"
CHECKPOINT_FILE = "/tmp/explanations_checkpoint.json"
BATCH_SIZE = 5


def load_questions():
    with open(QUESTIONS_FILE, encoding="utf-8") as f:
        return json.load(f)


def save_questions(questions):
    with open(QUESTIONS_FILE, "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)


def load_checkpoint():
    try:
        with open(CHECKPOINT_FILE, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def save_checkpoint(collected):
    with open(CHECKPOINT_FILE, "w", encoding="utf-8") as f:
        json.dump(collected, f, ensure_ascii=False, indent=2)


def build_prompt(batch):
    items = []
    for q in batch:
        correct_ids = [o["id"] for o in q["options"] if o.get("correct")]
        correct_texts = [o["text"]["en"] for o in q["options"] if o.get("correct")]
        items.append({
            "id": q["id"],
            "question_en": q["text"]["en"],
            "correct_answer": correct_texts[0] if correct_texts else "?",
            "all_options": [o["text"]["en"] for o in q["options"]],
        })

    return (
        "You are a CompTIA Security+ SY0-701 expert. "
        "For each question, write a concise 1-2 sentence explanation of WHY the correct answer is correct.\n\n"
        "Input:\n"
        + json.dumps(items, ensure_ascii=False)
        + "\n\nOutput ONLY a raw JSON array (no markdown fences, no extra text). "
        "Each element: {\"id\": \"SCREEN_XXX\", \"en\": \"<English explanation>\", \"it\": \"<spiegazione in italiano>\"}"
    )


def call_claude(prompt, retries=3):
    for attempt in range(retries):
        try:
            result = subprocess.run(
                ["claude", "-p", prompt, "--output-format", "text"],
                capture_output=True, text=True, timeout=120,
            )
            out = result.stdout.strip()
            if out:
                return out
        except subprocess.TimeoutExpired:
            print(f"  Timeout on attempt {attempt + 1}", file=sys.stderr)
        if attempt < retries - 1:
            time.sleep(2 ** attempt)
    return None


def extract_json_array(text):
    text = text.strip()
    start = text.find("[")
    end = text.rfind("]")
    if start != -1 and end != -1 and end > start:
        return json.loads(text[start: end + 1])
    return json.loads(text)


def process_batch(batch, collected):
    prompt = build_prompt(batch)
    raw = call_claude(prompt)
    if not raw:
        print("  No response", file=sys.stderr)
        return 0

    try:
        results = extract_json_array(raw)
    except json.JSONDecodeError as e:
        print(f"  JSON parse error: {e} | raw[:300]: {raw[:300]}", file=sys.stderr)
        return 0

    added = 0
    for item in results:
        qid = item.get("id")
        en = item.get("en", "").strip()
        it = item.get("it", "").strip()
        if qid and en and it:
            collected[qid] = {"en": en, "it": it}
            added += 1
    return added


def main():
    questions = load_questions()
    missing = [q for q in questions if "explanation" not in q]
    total = len(missing)
    print(f"Questions needing explanations: {total}")

    # Resume from checkpoint
    collected = load_checkpoint()
    already_done = {qid for qid in collected}
    remaining = [q for q in missing if q["id"] not in already_done]
    print(f"Already collected: {len(already_done)}, still to do: {len(remaining)}")

    done = len(already_done)
    for i in range(0, len(remaining), BATCH_SIZE):
        batch = remaining[i: i + BATCH_SIZE]
        ids = [q["id"] for q in batch]
        print(f"[{done}/{total}] Processing {ids}...", flush=True)
        added = process_batch(batch, collected)
        done += added
        print(f"  Added {added}/{len(batch)} (total collected: {done})", flush=True)

        # Save checkpoint to /tmp — outside the repo, won't trigger the stop hook
        save_checkpoint(collected)

        time.sleep(0.3)

    # Apply all collected explanations to questions.json in one shot
    questions_by_id = {q["id"]: q for q in questions}
    applied = 0
    for qid, exp in collected.items():
        if qid in questions_by_id and "explanation" not in questions_by_id[qid]:
            questions_by_id[qid]["explanation"] = exp
            applied += 1

    save_questions(questions)
    print(f"\nApplied {applied} explanations to questions.json")

    still_missing = sum(1 for q in questions if "explanation" not in q)
    print(f"Questions still missing: {still_missing}")


if __name__ == "__main__":
    main()
