// Crea un programa que recibe una lista de palabras, imprime la más larga, sabiendo que los strings son también listas! ("hola".length -> 4)
// Frase: vaya ejercicio mas dificil

const arguments = process.argv;
let index = 2
const larga = arguments[index].length
let palabra = arguments.length -1

while (larga !== palabra){
    if (larga < palabra){
        index++
    } else {
        (larga > palabra);
        palabra--
    }
}
console.log(larga + " es la palabra mas larga")
