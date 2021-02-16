'use strict';

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


function sum(number1, number2) {
    return number1 + number2;
}

// const result = checkIsPalindrome("somos");

exports.checkIsPalindrome = checkIsPalindrome;
