import json


def get_index_names(es):
    names = dict(names=[x for x in es.indices.get(index="*").keys()])
    return json.dumps(names, ensure_ascii=False)
