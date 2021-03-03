// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"

"use strict"
const terminal = process.argv;
let index = 2
let name = terminal[index]

function sayHelloToThisPerson(name) {
    return ("Hello " + name)
}
console.log(sayHelloToThisPerson(name))

