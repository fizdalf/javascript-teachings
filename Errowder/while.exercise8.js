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


const arguments = process.argv
const index = 2
const number = parseInt(arguments[index])
let min = 0
const max = 10
let tabla = 1
const finish = 10

if (!Number.isNaN(NaN)) {
    while (min <= max) {
        console.log(min * number)
        min++
    }
} else {
    while (tabla <= finish) {
        while (min <= max) {
            console.log(min * tabla)
            min++
        }
        min = 0;
        tabla++
    }
}


// te pongo otro ejemplo con //

//console.log(1 * number);
//console.log(2 * number);
//console.log(3 * number);
//console.log(4 * number);
//console.log(5 * number);
//console.log(6 * number);
//console.log(7 * number);
//console.log(8 * number);
//console.log(9 * number);
//console.log(10 * number):
