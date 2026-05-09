import json

with open('src/data/questions.json', 'r') as f:
    data = json.load(f)

missing = []

def check_obj(obj, path):
    if isinstance(obj, dict):
        if 'en' in obj:
            if 'it' not in obj or not obj['it'] or obj['it'].strip() == "":
                missing.append(path)
        for k, v in obj.items():
            check_obj(v, f"{path}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            check_obj(v, f"{path}[{i}]")

check_obj(data, "root")

for m in missing:
    print(m)
