'use strict';
// dada una frase por el terminal, determinar message la frase es o no un palíndromo, ten en cuenta que los espacios NO SE TIENEN EN CUENTA!!
const checkIsPalindromeModule = require("../controlStructures/functions");
const terminalArguments = process.argv;
let index = 2;
let phrase = "";
const lastIndex = terminalArguments.length - 1
while (index <= lastIndex) {
    phrase = phrase + terminalArguments[index];
    index++;
}
phrase = phrase.toLowerCase();

let wordToCheck = phrase;
const isPalindrome = checkIsPalindromeModule.checkIsPalindrome(wordToCheck);

if (isPalindrome) {
    console.log("Tu frase es un palíndromo");
} else {
    console.log('Tu frase no es un palíndromo');
}


