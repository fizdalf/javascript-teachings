// dada una palabra por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que la palabra lo sea, y "No es un palíndromo" en caso contrario";
// hay que tener en cuenta que los espacios que ponga el usuario en el terminal, no los recibimos.
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();

// console.log("AAAAAAAAAAAAA".toLowerCase());
"use strict";

const [, , ...wordItems] = process.argv;
let index = 0;
let word = "";
while (index < wordItems.length) {
    word += wordItems[index]; // word = word + wordItems[index];
    index++;
}
word = word.toLowerCase();

const itIsNOTAPalindrome = 'It is NOT a palindrome';
const itIsAPalindrome = 'It is a palindrome';
let message = itIsAPalindrome;
if (!word) {
    console.log('No wordItems to check');
} else {
    let rightIndex = word.length - 1;
    let leftIndex = 0;
    while (leftIndex < rightIndex) {
        const firstCharacter = word[leftIndex];
        const lastCharacter = word[rightIndex];
        if (firstCharacter !== lastCharacter) {
            message = itIsNOTAPalindrome;
            break;
        }
        leftIndex++;
        rightIndex--;
    }
    console.log(message);
}
