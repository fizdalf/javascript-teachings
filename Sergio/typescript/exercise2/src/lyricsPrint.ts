function isEmptyArrayOrEmptyEmptyArray(lyrics: string[][]) {
    return !lyrics.length || lyrics.length === 1 && !lyrics[0].length;
}

function getCharacter(lyrics: string[][], wordIndex: number, characterIndex: number) {
    return lyrics[0][wordIndex][characterIndex];
}

function getCharacter2(lyrics: string[][], wordIndex: number, characterIndex: number) {
    return lyrics[1][wordIndex][characterIndex];
}

function getCharacter3(lyrics: string[][], wordIndex: number, characterIndex: number) {
    return lyrics[2][wordIndex][characterIndex];
}

export function LyricsPrint(lyrics: string[][]): string[][] {
    if (isEmptyArrayOrEmptyEmptyArray(lyrics)) {
        return []
    }
    const toReturn = [];
    const previousWords = [];
    for (let wordIndex = 0; wordIndex < lyrics[0].length; wordIndex++) {
        let word = "";
        for (let characterIndex = 0; characterIndex < lyrics[0][wordIndex].length; characterIndex++) {
            word += getCharacter(lyrics, wordIndex, characterIndex);
            let wordsArray = [];
            previousWords.forEach(w => wordsArray.push(w));
            wordsArray.push(`${word}_`);
            toReturn.push(wordsArray);
        }
        previousWords.push(word);
    }
    if (lyrics.length === 2) {
        for (let wordIndex2 = 0; wordIndex2 < lyrics[1].length; wordIndex2++) {
            let word2 = "";
            for (let characterIndex2 = 0; characterIndex2 < lyrics[1][wordIndex2].length; characterIndex2++) {
                word2 += getCharacter2(lyrics, wordIndex2, characterIndex2);
                let wordsArray2 = [];
                wordsArray2.push(`${word2}_`);
                toReturn.push(wordsArray2);
            }
            previousWords.push(word2);

        }
        return toReturn
    }
    if (lyrics.length === 3) {
        for (let wordIndex3 = 0; wordIndex3 < lyrics[2].length; wordIndex3++) {
            let word3 = "";
            for (let characterIndex3 = 0; characterIndex3 < lyrics[2][wordIndex3].length; characterIndex3++) {
                word3 += getCharacter3(lyrics, wordIndex3, characterIndex3);
                let wordsArray3 = [];
                wordsArray3.push(`${word3}_`);
                toReturn.push(wordsArray3);
            }
            previousWords.push(word3);
        }
        return toReturn
    }

    return toReturn;
}
