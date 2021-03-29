// Create a function reverseWordsArray(words) that receives an array of strings and returns an array of the strings reversed (the strings are in the same order, each string is reversed)
// Example: reverseWordsArray(["something", "computer", "remainder", "monitor"]) -> ["gnihtemos", "retupmoc", "redniamer", "rotinom"]
// Use array functions to solve this exercise!



function reverseWordsArray(words) {
    return words
        .map(word => {
            let reversedWord = '';
            for (let x = word.length - 1; x >= 0; x--) {
                reversedWord = reversedWord + word[x]
            }
            return reversedWord;
        });
}


console.log(reverseWordsArray(["something", "computer", "remainder", "monitor"]));
