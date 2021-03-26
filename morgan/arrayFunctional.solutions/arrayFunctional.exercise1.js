// Create the function countVowels(word) that receives a word
// and returns the number of vowels of the word, using array functions like
// forEach, filter and map as required.
// Example: countVowels("aeiou") -> 5
// Example: countVowels("murcielago") -> 5

function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"]

    let wordGiven = word
    let counter= 0;
    let index = 0;
    let lastIndex = wordGiven.length -1
   while(index <= lastIndex){
        counter++
   }

wordGiven.filter(wordGiven => vowels).map(wordGiven=> (counter))
}










