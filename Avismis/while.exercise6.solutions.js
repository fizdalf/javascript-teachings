// Dados una lista de notas de estudiantes devolver la media
// https://www.matesfacil.com/calculadoras/estadistica/media-aritmetica/calcular-calculadora-media-aritmetica-ejemplos-problemas-resueltos-explicacion.html
// ejemplo -> 8 7 6 -> 7

const arguments = process.argv;

let index = 2;
let total = 0

const lastIndex = arguments.length - 1;

while (index <= lastIndex) {
    total = parseInt(arguments[index]) + total
    index++
}
average = total / (arguments.length - 2)

console.log("La media de estas " + (arguments.length -2) + " notas es " + average)
