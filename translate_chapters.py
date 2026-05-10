"""
Translate EN chapter HTML files from Italian to English.
Splits each file into <section> chunks so no single prompt is too large.
Translates chunks in parallel (4 workers per file).
"""
import subprocess, json, os, time, glob, sys, re
from concurrent.futures import ThreadPoolExecutor, as_completed

CHAPTERS_EN = sorted(glob.glob('public/manual/chapters/en/ch*.html'))
CHECKPOINT = '/tmp/translation_checkpoint.json'
CLAUDE_BIN = 'claude'
TIMEOUT = 180   # seconds per chunk
MAX_WORKERS = 4 # parallel chunks per file


def load_checkpoint():
    if os.path.exists(CHECKPOINT):
        return json.load(open(CHECKPOINT))
    return {}

def save_checkpoint(done):
    json.dump(done, open(CHECKPOINT, 'w'))


def translate_chunk(chunk: str, label: str) -> str | None:
    prompt = (
        "You are translating a CompTIA Security+ SY0-701 study manual HTML fragment.\n"
        "The fragment is from an English-versioned page but still contains Italian text.\n"
        "Translate ALL Italian text content to English.\n\n"
        "Rules:\n"
        "- Preserve ALL HTML tags and attributes exactly (class, id, href, src, lang, data-lang, aria-*, etc.)\n"
        "- Preserve all relative URLs and paths unchanged\n"
        "- Preserve all CSS class names unchanged\n"
        "- Do NOT translate: HTML attributes, URLs, CSS class names, security acronyms "
        "(TLS, PKI, MFA, SSL, VPN, CIA, AAA, RBAC, etc.), code snippets\n"
        "- Translate naturally for a CompTIA Security+ English-language study audience\n"
        "- Return ONLY the translated HTML fragment, no commentary, no markdown fences\n\n"
        "HTML fragment to translate:\n"
        + chunk
    )
    for attempt in range(3):
        try:
            result = subprocess.run(
                [CLAUDE_BIN, "-p", prompt, "--output-format", "text"],
                capture_output=True, text=True, timeout=TIMEOUT
            )
            if result.returncode == 0 and result.stdout.strip():
                out = result.stdout.strip()
                # Strip accidental markdown fences
                if out.startswith("```"):
                    lines = out.split('\n')
                    end = -1 if lines[-1].strip() == '```' else len(lines)
                    out = '\n'.join(lines[1:end])
                return out
        except subprocess.TimeoutExpired:
            print(f"    [{label}] timeout attempt {attempt+1}")
        except Exception as e:
            print(f"    [{label}] error attempt {attempt+1}: {e}")
        time.sleep(2 ** attempt)
    return None


def split_into_chunks(html: str) -> list[tuple[str, str]]:
    """
    Split HTML into labelled chunks:
      - 'preamble'   : everything before the first <section
      - 'section-N'  : each <section...>...</section> block
      - 'postamble'  : everything after the last </section>
    Returns list of (label, text) tuples.
    """
    chunks = []

    # Find all section spans
    section_starts = [m.start() for m in re.finditer(r'<section\b', html)]
    section_ends = []
    for start in section_starts:
        # Find matching </section>
        depth = 0
        i = start
        while i < len(html):
            if html[i:i+8] == '<section':
                depth += 1
                i += 8
            elif html[i:i+10] == '</section>':
                depth -= 1
                if depth == 0:
                    section_ends.append(i + 10)
                    break
                i += 10
            else:
                i += 1

    if not section_starts:
        # No sections — translate the whole file as one chunk
        return [('full', html)]

    # Preamble (before first section)
    preamble = html[:section_starts[0]]
    chunks.append(('preamble', preamble))

    # Each section
    for n, (s, e) in enumerate(zip(section_starts, section_ends), 1):
        chunks.append((f'section-{n}', html[s:e]))

    # Postamble (after last section)
    postamble = html[section_ends[-1]:]
    if postamble.strip():
        chunks.append(('postamble', postamble))

    return chunks


def translate_file(filepath: str) -> str | None:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    chunks = split_into_chunks(html)
    results = {}

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = {pool.submit(translate_chunk, text, label): (i, label)
                   for i, (label, text) in enumerate(chunks)}
        for fut in as_completed(futures):
            i, label = futures[fut]
            translated = fut.result()
            if translated is None:
                print(f"  FAIL chunk [{label}]")
                return None
            results[i] = translated

    # Reassemble in order
    return ''.join(results[i] for i in sorted(results))


def main():
    if not CHAPTERS_EN:
        print("No EN chapter files found. Run from project root.")
        sys.exit(1)

    if '--reset' in sys.argv and os.path.exists(CHECKPOINT):
        os.remove(CHECKPOINT)

    done = load_checkpoint()
    total = len(CHAPTERS_EN)
    ok = 0
    failed = []

    for i, filepath in enumerate(CHAPTERS_EN, 1):
        name = os.path.basename(filepath)
        if name in done:
            print(f"[{i:2}/{total}] SKIP {name}")
            ok += 1
            continue
        print(f"[{i:2}/{total}] Translating {name} ...", flush=True)
        result = translate_file(filepath)
        if result:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(result)
            done[name] = True
            save_checkpoint(done)
            print(f"[{i:2}/{total}] OK   {name}")
            ok += 1
        else:
            print(f"[{i:2}/{total}] FAIL {name}")
            failed.append(name)

    print(f"\nDone: {ok}/{total} translated, {len(failed)} failed")
    if failed:
        print("Failed:", failed)
        sys.exit(1)


if __name__ == '__main__':
    main()
