// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"
'use strict';

function sayHello(name) {
    return "Hola " + name
}

const name = process.argv[2]
const result = sayHello(name)
console.log(result)
