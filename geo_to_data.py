import json
from random import randint

with open('MOGEO.json','rt') as f:
    json_obj = json.load(f)

city_list =  (list(map(lambda x : x["properties"]["name"] ,json_obj["features"])))

city_dict = {}

for x in city_list:
    city_dict[x]= {"revenue":randint(0, 5000),"shelter_num":randint(0, 5),"disbursements":randint(5000, 50000)}

print(city_dict)