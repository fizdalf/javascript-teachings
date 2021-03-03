// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"

let arguments = process.argv
let index = 2;
let name = arguments[index]

function sayHello(name){
    return "Hola " + name
}
console.log(sayHello(name))