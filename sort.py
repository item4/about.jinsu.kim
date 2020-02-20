import json
import pathlib

contribution_json = pathlib.Path.cwd() / 'src' / 'data' / 'contributions.json'

with contribution_json.open('r') as f:
    data = json.load(f)

for project in data:
    project['items'] = sorted(project['items'], key=lambda x: x['number'])

data = sorted(data, key=lambda x: x['name'].split('/'))

with contribution_json.open('w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

