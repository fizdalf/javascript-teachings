import {LyricsPrint} from "./lyricsPrint";

const firstSentence = [
    "Well, here we are again"
]

describe('LyricsPrint Function',  () => {

    it("should print nothing at all", () => {
        const lyricsPrint = LyricsPrint([]);
        expect(lyricsPrint).toBe([])
    })

    test("It has to print the letter 'w_' as a computer would do", () => {
        const lyricsPrint = LyricsPrint([["w"]]);
        expect(lyricsPrint).toBe([
            ["w_"]
        ])
    })

    test("It has to print the letters 'we_' as a computer would do", () => {
        const lyricsPrint = LyricsPrint([["we"]]);
        expect(lyricsPrint).toBe([
            ["w_"],
            ["we_"]
        ])
    })


})

