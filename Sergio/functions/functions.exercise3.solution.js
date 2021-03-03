// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"
'use strict';

const [, , element] = process.argv
let nameToReturn = element

function sayHello(nameToReturn) {
    return "Hola " + nameToReturn
}

const message = sayHello(nameToReturn)

console.log(message)