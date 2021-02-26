// Si el usuario nos pasa un número por terminal, escribe la tabla de multiplicar de ése número, si no pasa ningún número, entonces escribe todas las tablas de multiplicar del 1
// al 10.

const arguments = process.argv;
const index = 2;
const number = parseInt(arguments[index]);
let multiplication = 0;


while (multiplication <= 10) {
    console.log(number * multiplication)
    multiplication++
}



