import {LyricsPrint} from "./lyricsPrint";


describe('LyricsPrint ', function () {
    it("should return an empty array if called with empty array", function () {
        let lyrics: string[][] = [];
        expect(LyricsPrint(lyrics)).toStrictEqual(
            []
        );
    });
    it('should return an empty array if called with an empty array in an empty array', () => {
        let lyrics = [[]];
        expect(LyricsPrint(lyrics)).toStrictEqual(
            []
        );
    })

    it.each`
            word        | expectedResult
            ${"H"}      | ${[["H_"],]}
            ${"Ho"}     | ${[["H_"], ["Ho_"],]}
            ${"Hol"}    | ${[["H_"], ["Ho_"], ["Hol_"],]}
            ${"F"}      | ${[["F_"],]} 
            ${"Fr"}     | ${[["F_"], ["Fr_"],]} 
            ${"Fri"}    | ${[["F_"], ["Fr_"], ["Fri_"],]} 
            ${""}       | ${[]} 
        `('should return valid output with a word',
        ({word, expectedResult}) => {
            let lyrics = [[word]];
            expect(LyricsPrint(lyrics)).toStrictEqual(expectedResult);
        });

    const twoWords = ["hola", "friend"];
    const twoWordsExpected = [['h_'], ['ho_'], ['hol_'], ['hola_'], ['hola', 'f_'], ['hola', 'fr_'], ['hola', 'fri_'], ['hola', 'frie_'], ['hola', 'frien_'], ['hola', 'friend_'],];
    const threeWords = ["hola", "my", "friend"]
    const threeWordsExpected = [['h_'], ['ho_'], ['hol_'], ['hola_'], ['hola', 'm_'], ['hola', 'my_'], ['hola', 'my', 'f_'], ['hola', 'my', 'fr_'], ['hola', 'my', 'fri_'], ['hola', 'my', 'frie_'], ['hola', 'my', 'frien_'], ['hola', 'my', 'friend_'],];
    const fourWords = ["hola", "my", "friend", 'I'];
    const fourWordsExpected = [['h_'], ['ho_'], ['hol_'], ['hola_'], ['hola', 'm_'], ['hola', 'my_'], ['hola', 'my', 'f_'], ['hola', 'my', 'fr_'], ['hola', 'my', 'fri_'], ['hola', 'my', 'frie_'], ['hola', 'my', 'frien_'], ['hola', 'my', 'friend_'], ['hola', 'my', 'friend', 'I_'],];

    it.each`
           words       | expected
        ${twoWords}    | ${twoWordsExpected}
        ${threeWords}  | ${threeWordsExpected}
        ${fourWords}   | ${fourWordsExpected} 
    `
    ('should return valid output with one array that has any number of words', ({words, expected}) => {
        let lyrics = [words];
        expect(LyricsPrint(lyrics)).toStrictEqual(expected);
    });

    it('should return valid output with more than one array that has any number of words', () => {
        let lyrics: string[][] = [
            [
                "hola"
            ],
            [
                "adiós"
            ]
        ];
        expect(LyricsPrint(lyrics)).toStrictEqual([["h_"], ["ho_"], ["hol_"], ["hola_",], ['a_'], ['ad_'], ['adi_'], ['adió_'], ['adiós_']]);
    })

});
