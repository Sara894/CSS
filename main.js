let obj = {
    'name':'Ann',
    'surname': 'Sunday'
}

for (let key in obj )
{
    console.log(obj['name']);
    console.log(key);
    console.log(obj[key]);
    console.log(`Ключ ${key} значение ${obj[key]}`);
}