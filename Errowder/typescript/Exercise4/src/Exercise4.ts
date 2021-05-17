//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

export function reverseWordsWith5OrMoreCharacters(sentence: string) {
    let test = sentence.split(" ")
    let finalSentence: string [] = []
    test.forEach((x) => {
        if (x.length < 5) {
            finalSentence.push(x)
        }
        if (x.length > 4) {
            finalSentence.push(x.split("").reverse().join(""))
        }
    })
    return finalSentence.join(" ")
}