// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"
'use strict';

const [, , name] = process.argv

function sayHello(name) {
    return "Hola " + name;
}

console.log(message)