// Create a function that receives an array of strings and returns an array of the strings reversed (the strings are in the same order, each string is reversed)
// Example: reverseStringArray(["something", "computer", "remainder", "monitor"]) -> ["gnihtemos", "retupmoc", "redniamer", "rotinom"]


function reverseStringArray(words) {
    const reverseCharactersLibrary = require("./functions.exercise7.solutions(phrase.backwards)");
    const reversedWords = [];
    let index = 0;
    let lastIndex = words.length - 1;
    while (index <= lastIndex) {
        const result = reverseCharactersLibrary.reverseCharacters(words[index])
        reversedWords.push(result);
        index++;
    }
    return reversedWords;
}

console.log(reverseStringArray(['tus', 'muertos', 'a', 'caballo']))

