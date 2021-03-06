'use strict';

let globalVariable = 4;

function test(a, b, globalVariable) {
    console.log(globalVariable);
}

function someOtherFunction(name) {
    console.log(name);
}

const variableWithFunction = someOtherFunction;

variableWithFunction('test');

function greet(name, languageSpecificGreetFunction) {
    return languageSpecificGreetFunction(name);
}

function spanishGreet(name) {
    return "Hola " + name;
}

function englishGreet(name) {
    return "Hello " + name;
}

function loreyMoneyGreet(name) {
    return "Hola, ke ase, " + name;
}

const frenchGreetingFunction = (name) => {
    return "Alo Mon Chery"
}

console.log(greet('Avismis', frenchGreetingFunction));
console.log(greet('Errow', spanishGreet));

function sum(a, b) {
    return a + b;
}

function sumFive(a) {
    // step 1
    // step 2
    // step 3

}

console.log(sumFive(2));

//
// const word = process.argv[2]
//
//
// function checkIsPalindrome(wordToCheck) {
//     if (wordToCheck === undefined) {
//         return false;
//     }
//
//     if (wordToCheck.length >= 2) {
//         let pairOfCharactersChecked = 0;
//         while (wordToCheck.length > pairOfCharactersChecked * 2) {
//             let firstCharacter = wordToCheck[pairOfCharactersChecked];
//             let lastCharacter = wordToCheck[wordToCheck.length - (1 + pairOfCharactersChecked)];
//             pairOfCharactersChecked++;
//             if (firstCharacter !== lastCharacter) {
//                 return false;
//             }
//         }
//     }
//
//     return true;
// }
//
// const test = checkIsPalindrome(word)
//
// if (test === true) {
//     console.log(word + " sí es palíndromo")
// } else {
//     console.log(word + " no es palíndromo")
// }
//
//
// function testItIsGreaterThanFive(number) {
//     if (number > 5) {
//         return true;
//     }
//     return false;
// }
//
// // comparadores
// // <=
// // >=
// //funciones lamda
// const addThreeToANumber = number => number + 3;
//
// const addTwoToANumber = number => {
//     return number + 2;
// }
// const test = addThreeToANumber(5);
//
// const result = console.log(4);// undefined;
//
// const pimpMyNumberAndShowIt = function (number) {
//     const message = "This number is now COOOOOOOOL: " + number;
//     // console.log(message);
//     // return message;
// }
//
// const myPimpedNumber = pimpMyNumberAndShowIt(4);
// console.log("This is my Pimped number: ", myPimpedNumber);
//
// exports.checkIsPalindrome = checkIsPalindrome;
//
//
//
//
//
//

function test(string, reversed) {
    if (!reversed) {
        reversed = '';
    }
    const index = string.length - reversed.length;
    reversed += string[index - 1];
    if (reversed.length === string.length) {
        return reversed;
    }
    return test(string, reversed);
}

const thing = require('./../Errowder/functions.exercise7');
const reverse = thing.reverseCharacters("");

console.log(reverse);

