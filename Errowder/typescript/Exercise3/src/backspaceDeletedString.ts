//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

//Your task is to process a string with "#" symbols.


export function deleteThePreviousLetter(word: string) {
    word.split("")
    let result = []
    let index = 0
    let resultIndex = -1
    let finalResult = []
    for(let currentCharacter = word[index]; index < word.length; index++){
        result.push(currentCharacter)
        resultIndex++
        if(currentCharacter === "#"){
            resultIndex = resultIndex -2
            finalResult.push(word[resultIndex])
        }
    }

    return finalResult.join;
}