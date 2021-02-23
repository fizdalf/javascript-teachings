// Crea un programa que recibe una lista números por terminal, imprime el mayor.
// Numeros: 2 9 52 77 3 1

const arguments = process.argv;
let index = 2
let lastIndex = arguments.length -1

while (arguments[index] !== lastIndex){
    if (arguments[index] < lastIndex){
        index++
    } else {
        (arguments[index] > lastIndex);
        lastIndex--
    }
}
console.log(arguments[index] + " es el mayor numero")