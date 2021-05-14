//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

//Your task is to process a string with "#" symbols.


export function deleteThePreviousLetter() {
    let word: any = "#"
    word = word.split("")
    let result = []
    let index = 0
    let resultIndex = -1
    let finalResult = []
    for(let currentWord = word[index]; currentWord !== "#"; index++){
        result.push(currentWord)
        resultIndex++
        if(currentWord === "#"){
            resultIndex = resultIndex -2
            finalResult.push(word[resultIndex])
        }
    }

    return finalResult.join;
}