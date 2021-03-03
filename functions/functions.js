'use strict';

const word = process.argv[2]



function checkIsPalindrome(wordToCheck) {
    if (wordToCheck === undefined) {
        return false;
    }

    if (wordToCheck.length >= 2) {
        let pairOfCharactersChecked = 0;
        while (wordToCheck.length > pairOfCharactersChecked * 2) {
            let firstCharacter = wordToCheck[pairOfCharactersChecked];
            let lastCharacter = wordToCheck[wordToCheck.length - (1 + pairOfCharactersChecked)];
            pairOfCharactersChecked++;
            if (firstCharacter !== lastCharacter) {
                return false;
            }
        }
    }

    return true;
}

const test = checkIsPalindrome(word)

if (test === true) {
   console.log(word + " sí es palíndromo")
} else {
    console.log(word + " no es palíndromo")
}


//
// //
// // console.log(checkIsPalindrome('hola'));
// // console.log(checkIsPalindrome('holaaloh'));
// //
// // function sum(number1, number2) {
// //     return number1 + number2;
// // }
// //
// // const testFunction = checkIsPalindrome;
// //
// // const palindromoBonito = function (word) {
// //     const isPalindrome = checkIsPalindrome(word);
// //     if (isPalindrome) {
// //         console.log('It is a palindrome!!');
// //         return;
// //     }
// //     console.log('It is NOT a palindrome!!');
// // }
// // palindromoBonito('hola');
//
// console.log(45);
// const list = [1, 2];
// const logBackup = console.log;
// console.log = function (test) {
//     logBackup('Formatted: ' + test);
// }
//
// console.log("hola");

function testItIsGreaterThanFive(number) {
    if (number > 5) {
        return true;
    }
    return false;
}

// comparadores
// <=
// >=
//funciones lamda
const addThreeToANumber = number => number + 3;

const addTwoToANumber = number => {
    return number + 2;
}
const test = addThreeToANumber(5);

const result = console.log(4);// undefined;

const pimpMyNumberAndShowIt = function (number) {
    const message = "This number is now COOOOOOOOL: " + number;
    // console.log(message);
    // return message;
}

const myPimpedNumber = pimpMyNumberAndShowIt(4);
console.log("This is my Pimped number: ", myPimpedNumber);

exports.checkIsPalindrome = checkIsPalindrome;





