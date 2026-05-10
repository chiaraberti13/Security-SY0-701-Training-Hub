import subprocess, json, os, time, glob, sys

CHAPTERS_EN = sorted(glob.glob('public/manual/chapters/en/ch*.html'))
CHECKPOINT = '/tmp/translation_checkpoint.json'

def load_checkpoint():
    if os.path.exists(CHECKPOINT):
        return json.load(open(CHECKPOINT))
    return {}

def save_checkpoint(done):
    json.dump(done, open(CHECKPOINT, 'w'))

def translate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    prompt = f"""You are translating a CompTIA Security+ SY0-701 study manual HTML page.
The file is an English version (lang="en") but the body text is still in Italian.
Translate ALL Italian text content to English.

Rules:
- Preserve ALL HTML tags and attributes exactly (class, id, href, src, lang, data-lang, aria-*, etc.)
- Preserve all relative URLs and paths unchanged
- Preserve all CSS class names unchanged
- Do NOT translate: HTML attributes, URLs, CSS class names, security acronyms (TLS, PKI, MFA, SSL, VPN, etc.), code snippets
- Translate naturally for a CompTIA Security+ English-language study audience
- Return ONLY the complete translated HTML with no additional commentary, no markdown fences

HTML to translate:
{content}"""

    for attempt in range(4):
        try:
            result = subprocess.run(
                ["claude", "-p", prompt, "--output-format", "text"],
                capture_output=True, text=True, timeout=300
            )
            if result.returncode == 0 and result.stdout.strip():
                out = result.stdout.strip()
                # Strip accidental markdown code fences if present
                if out.startswith("```"):
                    lines = out.split('\n')
                    out = '\n'.join(lines[1:-1] if lines[-1].strip() == '```' else lines[1:])
                return out
        except subprocess.TimeoutExpired:
            print(f"  Timeout on attempt {attempt + 1}")
        except Exception as e:
            print(f"  Error on attempt {attempt + 1}: {e}")
        wait = 2 ** attempt
        print(f"  Retry {attempt + 1} after {wait}s...")
        time.sleep(wait)
    return None


def main():
    if not CHAPTERS_EN:
        print("No EN chapter files found. Run from project root.")
        sys.exit(1)

    done = load_checkpoint()
    total = len(CHAPTERS_EN)
    translated = 0
    failed = []

    for i, filepath in enumerate(CHAPTERS_EN, 1):
        name = os.path.basename(filepath)
        if name in done:
            print(f"[{i}/{total}] SKIP {name}")
            translated += 1
            continue
        print(f"[{i}/{total}] Translating {name} ...", flush=True)
        result = translate_file(filepath)
        if result:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(result)
            done[name] = True
            save_checkpoint(done)
            print(f"[{i}/{total}] OK   {name}")
            translated += 1
        else:
            print(f"[{i}/{total}] FAIL {name}")
            failed.append(name)

    print(f"\nDone: {translated}/{total} translated, {len(failed)} failed")
    if failed:
        print("Failed files:", failed)
        sys.exit(1)


if __name__ == '__main__':
    main()
