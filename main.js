let obj = {
    'name':'Ann',
    'surname': 'Sunday'
}

arr = [1, 2,3];

arr.forEach(function(item, i , array)
{
    console.log(`
    Элемент ${item} 
    Индекс ${i} 
    Массив ${array}`);
})