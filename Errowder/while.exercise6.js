// Dados una lista de lastIndex de estudiantes devolver la media
// https://www.matesfacil.com/calculadoras/estadistica/media-aritmetica/calcular-calculadora-media-aritmetica-ejemplos-problemas-resueltos-explicacion.html
// ejemplo -> 8 7 6 -> 7

const arguments = process.argv
let index = 2

const lastIndex = arguments.length - 1
let media = []

while (index <= lastIndex) {
    const number = parseInt(arguments[index])
    media.push(number);
    index++
}

let indice = 0
const ultimo = media.length - 1
let suma = 0

while (indice <= ultimo) {
    suma = media[indice] + suma
    indice++
}

console.log("la media es " + (suma / media.length))
