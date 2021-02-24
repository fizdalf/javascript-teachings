// Crea un programa que recibe una lista de palabras, imprime la más firstWordLength, sabiendo que los strings son también listas! ("hola".length -> 4)
// Frase: vaya ejercicio mas dificil
const arguments = process.argv;
let index = 2
let lastIndex = arguments.length - 1;
let firstWordLength = arguments[index].length
let secondWordLength = arguments[arguments.length - 1].length;
while (index !== lastIndex) {
    if (firstWordLength < secondWordLength) {
        index++
        firstWordLength = arguments[index].length
    } else {
        lastIndex--;
        secondWordLength = arguments[lastIndex].length;
    }
}
console.log(arguments[index] + " es la palabra mas larga")
