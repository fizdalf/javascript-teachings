function processWord(currentWord: string, previousWords: any[]) {
    let word = "";
    const processedWords: string[][] = [];
    currentWord.split('').forEach((currentCharacter) => {
        word = `${word}${currentCharacter}`;
        processedWords.push([...previousWords, `${word}_`]);
    })
    previousWords.push(word);
    return processedWords
}

function processArrayOfWords(wordsArray: string[]) {
    const previousWords: string[] = [];
    let allProcessedWords: string[][] = [];
    wordsArray.forEach((currentWord) => {
        allProcessedWords = [...allProcessedWords, ...processWord(currentWord, previousWords)];
    })
    return allProcessedWords;
}

export function LyricsPrint(lyrics: string[][]): string[][] {
    let toReturn: string[][] = [];
    lyrics.forEach((stringArray) => {
        toReturn = [...toReturn, ...processArrayOfWords(stringArray)]
    })
    return toReturn;
}
