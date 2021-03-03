// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"

"use strict"
const terminal = process.argv;
let index = 2

function sayHelloToThisPerson(name) {
    name = terminal[index]
    return ("Hello " + name)
}
console.log(sayHelloToThisPerson())

