// Si el usuario nos pasa un número por terminal, escribe la tabla de multiplicar de ése número,
// si no pasa ningún número, entonces escribe todas las tablas de multiplicar del 1 al 10.
// Las tablas deberían verse así (descomenta el código, y ejecútalo para ver el resultado)
// console.log("1x1=1");
// console.log("2x1=2");
// console.log("3x1=3");
// console.log("4x1=4");
// console.log("5x1=5");
// console.log("6x1=6");
// console.log("7x1=7");
// console.log("8x1=8");
// console.log("9x1=9");
// console.log("10x1=10");
'use strict'


const [, , ...numbers] = process.argv
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

// const number = parseInt(arg[index])
let minimo = 0
const max = 10
let table = 1

if (!isNaN(number)) {
    while (minimo <= max) {
        console.log(minimo * number)
        minimo++
    }
} else {
    while (table <= max) {
        while (minimo <= max) {
            console.log(minimo * table)
            minimo++
        }
        minimo = 0;
        table++
    }
}
