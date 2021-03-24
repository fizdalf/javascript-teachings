// Create the function countVowels(word) that receives a word and returns the number of vowels of the word, using array functions like
// forEach, filter and map as required.
// Example: countVowels("aeiou") -> 5
// Example: countVowels("murcielago") -> 5

// function countVowels(word) {
//     let vowels
// }

const vowels = ["a", "e", "i", "o", "u"]

function countVowels(word) {
    return word.forEach(countVowels(word))
}

console.log(countVowels("hola"))
