// Our boss loved the concatenate function, but now he would like to have a function that can reverse the characters of a string
// Create the "reverseCharacters" function, which takes a string as argument and returns the string reversed!
// Example:
// reverseCharacters("My tailor is rich") -> "hcir si roliat yM"
// solve your exercise here below this line

function reverseCharacters(someString) {
    let lastIndex = someString.length - 1;
    let reversedString = '';
    while (lastIndex >= 0) {
        reversedString = reversedString + someString[lastIndex];
        lastIndex--;
    }
    return reversedString;
}

console.log(reverseCharacters("hola que tal"))


// *********************************************************************************************************

// function reverseCharactersFunctional(someString) {
//     return someString.split('').reverse().join('');
// }
//
// console.log(reverseCharactersFunctional("Algo!"))


// solve your exercise above this line
// Once you've finished please uncomment the following line as we are going to use this function in the another exercise
// exports.reverseCharacters = reverseCharacters;
