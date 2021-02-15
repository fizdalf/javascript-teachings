// dada una palabra por el terminal, determinar si es un palíndromo o no.

const list = process.argv;
let index = 2;
let wordToCheck = list[index];
let isPalindrome = true;

if (wordToCheck === undefined) {
    isPalindrome = false;
} else {
    if (wordToCheck.length >= 2) {
        let pairOfCharactersChecked = 0;
        while (wordToCheck.length > pairOfCharactersChecked * 2) {
            let firstCharacter = wordToCheck[pairOfCharactersChecked];
            let lastCharacter = wordToCheck[wordToCheck.length - (1 + pairOfCharactersChecked)];
            pairOfCharactersChecked++;
            if (firstCharacter !== lastCharacter) {
                isPalindrome = false;
                break;
            }
        }
    }
}
if (isPalindrome) {
    console.log("Tu palabra es un palíndromo");
} else {
    console.log('No es un palíndromo');
}
