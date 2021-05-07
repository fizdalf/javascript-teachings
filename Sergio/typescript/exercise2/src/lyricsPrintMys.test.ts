import {LyricsPrint} from "./lyricsPrint";


describe('Sergio', function () {
    it("should return an empty array if called with empty array", function () {
        let lyrics: string[][] = [];
        expect(LyricsPrint(lyrics)).toStrictEqual(
            []
        );
    });
    it('should return an empty array if called with an empty array in an empty array',() => {
        let lyrics = [[]];
        expect(LyricsPrint(lyrics)).toStrictEqual(
            []
        );
    })
    it('should return valid output with 1 character',()=>{
        let lyrics = [["H"]];
        expect(LyricsPrint(lyrics)).toStrictEqual(
            [["H_"]]
        );
    })
});