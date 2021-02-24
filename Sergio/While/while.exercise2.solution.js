// Crea un programa que recibe una lista números por terminal, imprime el mayor.
'use strict'

const arg = process.argv;
let index = 2;
const lastIndex = arg.length - 1;
let max = Number.NEGATIVE_INFINITY;
while (index <= lastIndex) {
    let number = parseInt(arguments[index]);
    if (number > max) {
        max = number;
    }
    index++;
}
console.log(number + 'es el más grande');
