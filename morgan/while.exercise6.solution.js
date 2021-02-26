//8 2 6 9 10 5
const arguments = process.argv
const lastIndex = arguments.length - 1
let index = 2;
const media = [];
while (index <= lastIndex) {
    const nota = parseInt(arguments[index])
    media.push(nota)
    index++
}
const lastMedia = media.length - 1

let indexMedia = 0;
let suma = 0;
while (indexMedia <= lastMedia) {
    suma = media[indexMedia] + suma;
    indexMedia++
}

console.log("la media es " + suma / media.length);
