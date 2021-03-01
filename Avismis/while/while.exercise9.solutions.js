// dada una palabra por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que lo sea, y "No es un palíndromo" en caso contrario";
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();
// console.log("AAAAAAAAAAAAA".toLowerCase());


const [, , word] = process.argv;

const beginningOfWord = word[0]
let messageYes = word + " sí es un palíndromo"
let messageNo = word + " no es un palíndromo"
let lastPossition = word.length - 1
let endOfWord = word[lastPossition]

if (word.length === 1) {
    console.log(messageYes)
} else if (word.length === 2) {
    if (beginningOfWord === endOfWord) {
        console.log(messageYes)
    } else {
        console.log(messageNo)
    }
} else if (word.length === 3) {
    if (beginningOfWord === endOfWord) {
        console.log(messageYes)
    } else {
        console.log(messageNo)
    }
}
// de aquí hacía arriba está bien (palabras de 1, 2 ó 3 letras)

let halfWord = word.length / 2
let index = 1
let isPalindrome = true

while (halfWord >= index && isPalindrome) {

    const rightSidePossition = halfWord + index
    const leftSidePossition = halfWord - index
    const leftSideLetter = word[leftSidePossition]
    const rightSideLetter = word[rightSidePossition]
console.log("estoy comparando " + leftSideLetter + " y " + rightSideLetter)
    if (leftSideLetter === rightSideLetter) {
        console.log(messageYes)
    } else if (leftSideLetter !== rightSideLetter){
        isPalindrome = false
        console.log(messageNo)
    }
    index++
}


// ------------------------------------------------------------------------------------------------------------

// const [,,word] = process.argv;

// let endOfWord = word.length -1
//
// let halfWord = (word.length / 2)
//
// let begginingOfWord = 1
//
// console.log(halfWord)
// console.log(endOfWord)
// console.log(begginingOfWord)
//
// while (begginingOfWord < endOfWord) {
//     if ((halfWord - 1) === (halfWord + 1)) {
//         console.log(word + " sí es un palíndromo")
//     } else if ((halfWord - 1) !== (halfWord + 1)) {
//         console.log(word + " no es un palíndromo")
//     }
//     begginingOfWord++
// }
//

// ------------------------------------------------------------------------------------------------------------