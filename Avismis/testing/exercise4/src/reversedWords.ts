const characterLimitForReversing = 5;

export class reverseWords {
    static spinWords(words: string) {
        const wordsArray: string[] = []
        const individualWords = this.getWordsAsArray(words)
        individualWords.forEach(word => {
            wordsArray.push(this.getReversedWordIfBiggerThanFourCharacters(word));
        })
        return this.getStringFromArray(wordsArray)
    }

    private static getStringFromArray(wordsArray: string[]) {
        return wordsArray.join(" ");
    }

    private static getWordsAsArray(words: string) {
        return words.split(" ");
    }

    private static getReversedWordIfBiggerThanFourCharacters(word: string) {
        return (word.length >= characterLimitForReversing) ? word.split('').reverse().join("") : word;
    }
}

