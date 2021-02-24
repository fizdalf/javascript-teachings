// Crea un programa que recibe una lista números por terminal, imprime el mayor.
'use strict'

const arg = process.argv;
let index = 2;
const lastIndex = arg.length - 1;

let message;
while (index <= lastIndex) {
    let number = arguments[index];
    if(number < number){
        message = number + 'es el más grande'
    }
}
console.log(message);