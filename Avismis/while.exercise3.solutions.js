// Crea un programa que recibe una lista de palabras, imprime la más firstWordLength, sabiendo que los strings son también listas! ("hola".length -> 4)

const arguments = process.argv;
let index = 3;
const lastIndex = arguments.length - 1;
let longestWord = arguments[2];

while (index <= lastIndex) {
    let word = arguments[index]
    if (word.length > longestWord.length) {
        longestWord = word;
    }
    index++;
}

console.log("la palabra mas firstWordLength es " + longestWord);
