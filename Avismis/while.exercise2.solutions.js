// Crea un programa que recibe una lista números por terminal, imprime el mayor.

const arguments = process.argv;
let index = 2

const lastIndex = arguments.length - 1;
let max = 0

while (index <= lastIndex) {
    let number = parseInt(arguments[index])

    if (number > max) {
        max = number
    }

    index++;
}

let message = "de entre "  + (arguments.length - 2) + " números el mayor es " + max
console.log(message);


