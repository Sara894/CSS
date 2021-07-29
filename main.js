//синхронность
function make_pizza(dough, cheeze, sausage)
{
    let pizza = "катаю лепешку из " + dough + ",кладу " + cheeze + ",тру на терке " + sausage + ",ставлю в духовку " ;
    return pizza;
}
let dough = "1 кг теста";
let cheeze = "1 кг сыра";
let sausage = "1 кг колбасы";
//готовим пиццу
let pizza = make_pizza(dough, cheeze, sausage);
console.log(pizza);
//ждем пока ее приготовят - 2 часа это долго
//едим пиццу
function eat_pizza()
{
    return "пицца кончилась, всю съели";
}
pizza = eat_pizza();
console.log(pizza)

//Хотим читать книгу пока готовят пиццу. Как это сделать?

//попытка в асинхронность
//3 функции - готовим, читаем, едим
  