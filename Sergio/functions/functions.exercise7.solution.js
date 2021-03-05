// Our boss loved the concatenate function, but he now he would like to have a function that can reverse the characters of a string
// Create the "reverseCharacters" function, which takes a string as argument and returns the string reversed!
// Example:
// reverseCharacters("My tailor is rich") -> "hcir si roliat yM"
// solve your exercise here below this line
const [, , ...characterToReverse] = process.argv

function reverseCharacters(string){
    return string.reverse(characterToReverse)
}

console.log(reverseCharacters(characterToReverse))

// solve your exercise above this line
// Once you've finished please uncomment the following line as we are going to use this function in the another exercise
exports.reverseCharacters = reverseCharacters;
