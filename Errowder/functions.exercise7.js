// Our boss loved the concatenate function, but he now he would like to have a function that can reverse the characters of a string
// Create the "reverseCharacters" function, which takes a string as argument and returns the string reversed!
// Example:
// reverseCharacters("My tailor is rich") -> "hcir si roliat yM"
// solve your exercise here below this line

const [, , ...words] = process.argv
let index = 0
let lastIndex = words.length -1
let currentWord = words[index]
const firstCharacter = currentWord[0]
let lastCharacter = currentWord[words.length]
let reverseCharacters =0
let finalWord = []

//function reverseCharacters(){
while (index <= lastIndex) {
    while (currentWord.length -1 > 0) {
        finalWord = lastCharacter
        lastCharacter--
        // reverseCharacters = lastCharacter
    }
    finalWord = currentWord
    index++
}
console.log(finalWord)

// solve your exercise above this line
// Once you've finished please uncomment the following line as we are going to use this function in the another exercise
// exports.reverseCharacters = reverseCharacters;
