// Dados una lista de notas de estudiantes devolver la media
// https://www.matesfacil.com/calculadoras/estadistica/media-aritmetica/calcular-calculadora-media-aritmetica-ejemplos-problemas-resueltos-explicacion.html
// ejemplo -> 8 7 6 -> 7

const arguments = process.argv
let index = 2
const number = parseInt(arguments[index])
const notas = arguments.length - 1
let media = []

while (number <= notas) {
    media.push(index)
    index++
}

let primero = 0
const ultimo = media.length -1
let siguiente = 0

while (primero <= ultimo) {
    siguiente = media[primero] + siguiente
    primero++
}

console.log("la media es " + (siguiente/ultimo))