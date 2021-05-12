function isEmptyArrayOrEmptyEmptyArray(lyrics: string[][]) {
    return !lyrics.length || lyrics.length === 1 && !lyrics[0].length;
}


function getCharacter(word: string, characterIndex: number) {
    return word[characterIndex];
}


export function LyricsPrint(lyrics: string[][]): string[][] {
    if (isEmptyArrayOrEmptyEmptyArray(lyrics)) {
        return []
    }

    const toReturn = [];
    const finalReturn: string[][] = [];
    const previousWords = [];

    for (let arrayIndex = 0; arrayIndex < lyrics.length; arrayIndex++) {
        const pieceOfLyrics = lyrics[arrayIndex];
        let allWordsInPiece = [];
        for (let wordIndex = 0; wordIndex < pieceOfLyrics.length; wordIndex++) {
            let word = "";
            const singleWord = pieceOfLyrics[wordIndex];
            for (let characterIndex = 0; characterIndex < singleWord.length; characterIndex++) {
                const currentCharacter = getCharacter(singleWord, characterIndex);
                word += currentCharacter;
                const wordsArray = [];
                wordsArray.push(`${word}_`);
                toReturn.push(wordsArray);
                const listaPuta = allWordsInPiece;
                listaPuta.push([`${word}_`])
                listaPuta.forEach(w => finalReturn.push(w))
                previousWords.forEach(w => wordsArray.push(w));
            }
            previousWords.push(word);
            allWordsInPiece.push([word]);
                console.log(allWordsInPiece)
        }
    }
    return finalReturn;
}
