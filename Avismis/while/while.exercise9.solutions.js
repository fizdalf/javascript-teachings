// dada una palabra por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que lo sea, y "No es un palíndromo" en caso contrario";
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();
// console.log("AAAAAAAAAAAAA".toLowerCase());


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


const [, , word] = process.argv;

const begginingOfWord = word[0]
let messageYes = word + " sí es un palíndromo"
let messageNo = word + " no es un palíndromo"

if (word.length === 1) {
    console.log(messageYes)
} else if (word.length === 2) {
    if (begginingOfWord === word[1]) {
        console.log(messageYes)
    } else {
        console.log(messageNo)
    }
} else if (word.length === 3) {
    if (begginingOfWord === word[2]) {
        console.log(messageYes)
    } else {
        console.log(messageNo)
    }
}
// de aquí hacía arriba está bien (palabras de 1, 2 ó 3 letras)

let halfWord = (word.length / 2)
let index = 1

while (halfWord >= index) {
        if ((word[halfWord] + index) === (word[halfWord] - index)){
            console.log(messageYes)
        } else{
            console.log(messageNo)
        }
        index++
    }

console.log(word[halfWord])


// ------------------------------------------------------------------------------------------------------------

