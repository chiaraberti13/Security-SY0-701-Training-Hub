import json

with open('src/data/questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

count = 0
for q in data:
    if q['text'].get('it') == q['text'].get('en') and len(q['text'].get('en', '')) > 20:
        print(f"Question ID: {q['id']}")
        print(f"English: {q['text']['en']}")
        print(f"Italian: {q['text']['it']}")
        print("-" * 20)
        count += 1
    
    for opt in q['options']:
        if opt['text'].get('it') == opt['text'].get('en') and len(opt['text'].get('en', '')) > 20:
             # Some options might be legitimate to be same (technical terms)
             # but long sentences usually shouldn't be.
             is_technical = any(term in opt['text']['en'] for term in ["WPA3", "AES", "FIM", "SIEM", "IDS", "IPS"])
             if not is_technical:
                print(f"Option ID: {opt['id']} in {q['id']}")
                print(f"English: {opt['text']['en']}")
                print(f"Italian: {opt['text']['it']}")
                print("-" * 20)
                count += 1

print(f"Found {count} suspicious matches.")
