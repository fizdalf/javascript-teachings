export class Kata {
    static spinWords(words: string) {
        const wordsArray = words.split(" ");
        const toReturn = [];
        for (let i = 0; i < wordsArray.length; i++) {
            toReturn.push(this.spinWordIfIsLongerThan5(wordsArray[i]));
        }
        return toReturn.join(" ");
    }

    static spinWordIfIsLongerThan5(word: string): string {
        if (word.length >= 5) {
            return word.split("").reverse().join("");
        }
        return word
    }
}
