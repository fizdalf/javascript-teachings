export class reverseWords {
    static spinWords(words: string) {
        const wordsArray = []
        const eachWord = words.split(" ")
        for (let index = 0; eachWord.length > index; index++) {
            if(eachWord[index].length >= 5){
                wordsArray.push(eachWord[index].split('').reverse().join(""))
            } else {
                wordsArray.push(eachWord[index])
            }
        }
        return wordsArray.join(" ")
    }

}

