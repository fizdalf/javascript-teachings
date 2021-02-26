// Dados una lista de notas de estudiantes devolver la media
// https://www.matesfacil.com/calculadoras/estadistica/media-aritmetica/calcular-calculadora-media-aritmetica-ejemplos-problemas-resueltos-explicacion.html
// ejemplo -> 8 7 6 -> 7
'use strict'

const arg = process.argv;
let index = 2;
const lastIndex = arg.length - 1;

let total = 0

while (index <= lastIndex) {
    total = parseInt(arg[index]) + total
    index++
}
let media = total / (arg.length - 2)

console.log('La media es ' + media)