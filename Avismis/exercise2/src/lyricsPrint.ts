export function LyricsPrint(lyrics: string[][]): string[] {
    const arrayOfLyrics = []
    const fullSong = ["Hola"]
    let indexElementOfArray = 0
    while (indexElementOfArray >= fullSong.length){
        arrayOfLyrics.push(fullSong[indexElementOfArray])
    }
    indexElementOfArray++
    return (arrayOfLyrics);
}
