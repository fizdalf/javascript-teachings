// Crea un programa que recibe una lista números por terminal, imprime el mayor.

const arguments = process.argv;
let index = 2

const lastIndex = arguments.length - 1;
let max = arguments

while (index <= lastIndex) {
    let number = arguments[index]

    if (number > max) {
        max = number
    }

    index++;
}

let message = max
console.log(message);


