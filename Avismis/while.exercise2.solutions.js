// Crea un programa que recibe una lista números por terminal, imprime el mayor.

const arguments = process.argv;
let index = 2

const lastIndex = arguments.length - 1;
let max = 0

while (index <= lastIndex) {
    let number = arguments[index]

    console.log("el número en la posición " + (index - 2) + " es " + number)

    if (number > max) {
        max = number
        console.log("me quedo con el " + max)
    }

    index++;
}

let message = "de entre "  + (arguments.length - 2) + " números el mayor es " + max
console.log(message);


