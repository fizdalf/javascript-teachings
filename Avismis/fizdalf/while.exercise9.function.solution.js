// dada una frase por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que la frase lo sea, y "No es un palíndromo" en caso contrario";
// hay que tener en cuenta que los espacios que ponga el usuario en el terminal, no los recibimos.
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();
// console.log("AAAAAAAAAAAAA".toLowerCase());
// A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá
// Adan no calla con nada

// PALABRA PALINDROMO
"use strict";
const palindrome = require('../../functions/functions');

const [, , ...wordItems] = process.argv;
let index = 0;
let word = "";
while (index < wordItems.length) {
    word += wordItems[index]; // word = word + wordItems[index];
    index++;
}
word = word.toLowerCase();

let message = 'It is NOT a palindrome';
if (palindrome.checkIsPalindrome(word)) {
    message = 'It is a palindrome';
}

console.log(message);

