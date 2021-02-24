// Crea un programa que recibe una lista números por terminal, imprime el mayor.
// Numeros: 2 9 52 77 3 1

const arguments = process.argv;
let index = 2
let lastIndex = arguments.length - 1
let firstNumber = parseInt(arguments[index]);
let secondNumber = parseInt(arguments[lastIndex]);

while (firstNumber !== secondNumber) {
    if (firstNumber < secondNumber) {
        index++
        firstNumber = parseInt(arguments[index]);
    } else {
        lastIndex--
        secondNumber = parseInt(arguments[lastIndex]);
    }
}
console.log(arguments[index] + " es el mayor numero")
