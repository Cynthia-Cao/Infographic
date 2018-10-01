import json
from random import randint

with open('MOGEO.json','rt') as f:
    json_obj = json.load(f)

city_list =  (list(map(lambda x : x["properties"]["name"] ,json_obj["features"])))

city_json = list(map(lambda x : {"name":x, "value":randint(0, 5000)},city_list))

print(city_json)