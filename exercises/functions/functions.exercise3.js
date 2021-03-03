// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"
"use strict"
let argument = process.argv
let index = 2;


function sayHello(names) {
    names = argument[index]
    return "Hola " + names

}

console.log(sayHello())