#!/usr/bin/env python3
"""Generate explanations for CompTIA Security+ questions missing them."""

import json
import subprocess
import sys
import time

QUESTIONS_FILE = "src/data/questions.json"
BATCH_SIZE = 5  # questions per claude call


def load_questions():
    with open(QUESTIONS_FILE, encoding="utf-8") as f:
        return json.load(f)


def save_questions(questions):
    with open(QUESTIONS_FILE, "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)


def build_prompt(batch):
    items = []
    for q in batch:
        options = [
            {"id": o["id"], "text": o["text"]["en"], "correct": o.get("correct", False)}
            for o in q["options"]
        ]
        items.append({
            "id": q["id"],
            "question_en": q["text"]["en"],
            "options": options,
        })

    prompt = (
        "You are a CompTIA Security+ SY0-701 expert. "
        "For each question below, write a concise explanation (1-2 sentences) "
        "of why the correct answer is correct.\n\n"
        "Questions:\n"
        + json.dumps(items, ensure_ascii=False)
        + "\n\nRespond ONLY with a valid JSON array — no markdown, no extra text. "
        "Each element must have: id, en (English explanation), it (Italian explanation).\n"
        "Example: [{\"id\":\"SCREEN_001\",\"en\":\"...\",\"it\":\"...\"}]"
    )
    return prompt


def call_claude(prompt, retries=3):
    for attempt in range(retries):
        try:
            result = subprocess.run(
                ["claude", "-p", prompt, "--output-format", "text"],
                capture_output=True, text=True, timeout=120,
            )
            if result.returncode == 0 and result.stdout.strip():
                return result.stdout.strip()
        except subprocess.TimeoutExpired:
            print(f"  Timeout on attempt {attempt + 1}", file=sys.stderr)
        if attempt < retries - 1:
            time.sleep(2 ** attempt)
    return None


def extract_json_array(text):
    """Extract a JSON array from text that may contain extra content."""
    text = text.strip()
    # Find first '[' and last ']'
    start = text.find("[")
    end = text.rfind("]")
    if start != -1 and end != -1:
        return json.loads(text[start : end + 1])
    return json.loads(text)


def process_batch(batch, questions_by_id):
    prompt = build_prompt(batch)
    raw = call_claude(prompt)
    if not raw:
        print(f"  Failed to get response for batch", file=sys.stderr)
        return 0

    try:
        results = extract_json_array(raw)
    except json.JSONDecodeError as e:
        print(f"  JSON parse error: {e}", file=sys.stderr)
        print(f"  Raw: {raw[:200]}", file=sys.stderr)
        return 0

    added = 0
    for item in results:
        qid = item.get("id")
        en = item.get("en", "").strip()
        it = item.get("it", "").strip()
        if qid and en and it and qid in questions_by_id:
            questions_by_id[qid]["explanation"] = {"en": en, "it": it}
            added += 1
    return added


def main():
    questions = load_questions()
    questions_by_id = {q["id"]: q for q in questions}

    missing = [q for q in questions if "explanation" not in q]
    total = len(missing)
    print(f"Questions needing explanations: {total}")

    done = 0
    for i in range(0, total, BATCH_SIZE):
        batch = missing[i : i + BATCH_SIZE]
        ids = [q["id"] for q in batch]
        print(f"[{done}/{total}] Processing {ids}...")
        added = process_batch(batch, questions_by_id)
        done += added
        print(f"  Added {added}/{len(batch)} explanations (total done: {done})")

        # Save after every batch
        save_questions(questions)

        # Small delay to avoid rate limits
        time.sleep(0.5)

    remaining = sum(1 for q in questions if "explanation" not in q)
    print(f"\nDone! Questions still missing: {remaining}")


if __name__ == "__main__":
    main()
