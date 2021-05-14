function isEmptyArrayOrEmptyEmptyArray(lyrics: string[][]) {
    return !lyrics.length || lyrics.length === 1 && !lyrics[0].length;
}

function getCharacter(lyrics: string[][], wordIndex: number, characterIndex: number) {
    return lyrics[0][wordIndex][characterIndex];
}

function getCharacterFromSecondArray(lyrics: string[][], wordIndex: number, characterIndex: number) {
    return lyrics[1][wordIndex][characterIndex];
}

export function LyricsPrint(lyrics: string[][]): string[][][] {
    if (isEmptyArrayOrEmptyEmptyArray(lyrics)) {
        return []
    }

    const toReturn = [];
    const toReturn2 = []
    const previousWords = [];
    const previousWords2: string[] = []

    for (let wordIndex = 0; wordIndex < lyrics[0].length; wordIndex++) {
        let word = "";
        for (let characterIndex = 0; characterIndex < lyrics[0][wordIndex].length; characterIndex++) {
            word += getCharacter(lyrics, wordIndex, characterIndex);
            const wordsArray = [];
            previousWords.forEach(w => wordsArray.push(w));
            wordsArray.push(`${word}_`);
            toReturn.push(wordsArray);
        }
        previousWords.push(word);
    }
    for (let wordIndex = 0; wordIndex < lyrics[1].length; wordIndex++) {
        let word = "";
        for (let characterIndex = 0; characterIndex < lyrics[1][wordIndex].length; characterIndex++) {
            word += getCharacterFromSecondArray(lyrics, wordIndex, characterIndex);
            const wordsArray = [];
            previousWords2.forEach(w => wordsArray.push(w));
            wordsArray.push(word + "_");
            toReturn2.push(wordsArray);
        }
        previousWords.push(word);
    }
    const finalReturn = [toReturn, toReturn2]
    return finalReturn;
}
