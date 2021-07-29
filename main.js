//callback функции

const foo = function(){
    return "Hello, world!";
};

//вызываем функцию и выводим результат в консоль
console.log(foo());

//выводим саму функцию в консоль 
console.log(foo);

/* Значит, нам ничего не мешает передавать функцию как параметр
других функций */

const runIt = function(fn){
    console.log("Вызов через функцию runIt!");
    return fn();
}

console.log(runIt(foo));