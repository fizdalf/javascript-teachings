// crea una función sayHello que devuelva "Hola " + nombre recibido como argumento.
// ejemplo sayHello('Juan') -> "Hola Juan"


const arguments = process.argv;
let index = 2
const name =arguments[index]

function sayHelloToThisPerson() {
    return ("hello " + name)
}
console.log(sayHelloToThisPerson())

