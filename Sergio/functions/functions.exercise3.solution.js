// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"
'use strict';

const [, , element] = process.argv
let name = element

function sayHello(name) {
    return "Hola " + name
    const message = sayHello(name)
}

console.log(message)