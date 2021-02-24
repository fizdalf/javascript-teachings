// Crea un programa que recibe una lista de palabras, imprime la más larga, sabiendo que los strings son también listas! ("hola".length -> 4)

const arguments = process.argv;
let index = 2

const lastIndex = arguments.length - 1;

let longestWord = "a"

while (index <= lastIndex) {

    let word = arguments[index]
    if (word.length > longestWord.length) {
        longestWord = word
    }
    index++
}

let message = longestWord

console.log(message)