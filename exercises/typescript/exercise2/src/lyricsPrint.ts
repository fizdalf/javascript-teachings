function isEmptyArrayOrEmptyEmptyArray(lyrics: string[][]) {
    return !lyrics.length || lyrics.length === 1 && !lyrics[0].length;
}

function getCharacter(lyrics: string[][], wordIndex: number, characterIndex: number, arrayIndex: number) {
    return lyrics[arrayIndex][wordIndex][characterIndex];
}

export function LyricsPrint(lyrics: string[][]): string[][] {
    if (isEmptyArrayOrEmptyEmptyArray(lyrics)) {
        return []
    }

    const toReturn = [];
    let previousWords = [];
    for (let wordIndex = 0; wordIndex < lyrics[0].length; wordIndex++) {
        let word = "";
        for (let characterIndex = 0; characterIndex < lyrics[0][wordIndex].length; characterIndex++) {
            word += getCharacter(lyrics, wordIndex, characterIndex, 0);
            const wordsArray = [];
            previousWords.forEach(w => wordsArray.push(w));
            wordsArray.push(`${word}_`);
            toReturn.push(wordsArray);
        }
        previousWords.push(word);
    }

    if (lyrics.length === 2) {
        previousWords = []
        console.log(toReturn);
        for (let wordIndex = 0; wordIndex < lyrics[1].length; wordIndex++) {
            let word = "";
            for (let characterIndex = 0; characterIndex < lyrics[1][wordIndex].length; characterIndex++) {
                word += getCharacter(lyrics, wordIndex, characterIndex, 1);
                const wordsArray = [];
                previousWords.forEach(w => wordsArray.push(w));
                wordsArray.push(`${word}_`);
                toReturn.push(wordsArray);
            }
            previousWords.push(word);
        }

    }

    return toReturn;
}
