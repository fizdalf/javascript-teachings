// dada una frase por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que la frase lo sea, y "No es un palíndromo" en caso contrario";
// hay que tener en cuenta que los espacios que ponga el usuario en el terminal, no los recibimos.
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();
// console.log("AAAAAAAAAAAAA".toLowerCase());
// A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá
// Adan no calla con nada
// console.log('A' === 'Á'); // aabbaa

//Intenta hacerlo primero para ver si una palabra es palindromo luego mirar una frase

const arguments = process.argv
let index = 2
let lastIndex = arguments.length - 1

let rightWord = arguments[index]
let leftWord = arguments[lastIndex]

let indice = 0
let lastIndice = leftWord.length - 1

let rightLetter = rightWord[indice]
let leftLetter = leftWord[lastIndice]

let lastLetterOfTheRightWord = rightWord.length - 1

// Esto compara las palabras tal cual
// while (rightWord === leftWord) {
//     index++
//     lastIndex--
//     rightWord = arguments[index]
//     leftWord = arguments[lastIndex]
//     if (index >= lastIndex) {
//         break
//     }
// }

while (rightLetter === leftLetter) {
    indice++
    lastIndice--
    rightLetter = rightWord[indice]
    leftLetter = leftWord[lastIndice]
    if (indice > lastLetterOfTheRightWord) {
        index++
        console.log("aqui peta")
    }
    // if (lastIndice < 0) {
    //     lastIndex--
    //     console.log("aqui tambien")
    // }
}


console.log("Estas letras son diferentes")
console.log(rightLetter)
console.log(leftLetter)

//  node Errowder\while.exercise9.js