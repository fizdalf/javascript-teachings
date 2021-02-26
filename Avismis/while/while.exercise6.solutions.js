// Dados una lista de cantidadTotalDeNotas de estudiantes devolver la media
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
const itemsCount = arguments.length - 2;
average = total / itemsCount

console.log("La media de estas " + itemsCount + " cantidadTotalDeNotas es " + average)
