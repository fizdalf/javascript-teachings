// Create the function countVowels(word) that receives a word and returns the number of vowels of the word, using array functions like
// forEach, filter and map as required.
// Example: countVowels("aeiou") -> 5
// Example: countVowels("murcielago") -> 5
// Example: countVowels("mama") -> 2


function countVowels(word) {
    const characterArray = word.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // const filteredVowelsInWord = characterArray.filter(character => vowels.filter(vowel => vowel === character).length > 0);
    // return filteredVowelsInWord.length;

    let vowelsCount = 0;

    characterArray.forEach(character => {
        if (vowels.filter(vowel => vowel === character).length > 0) {
            vowelsCount++;
        }
    })
    return vowelsCount;

}

console.log(countVowels('mgfdrtynbmxzcdlkj'));
