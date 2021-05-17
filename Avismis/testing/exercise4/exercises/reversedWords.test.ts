import {reverseWords} from "./reversedWords";

describe('reversedWord my Tests', function () {
    it("Given an empty string", function () {
        const words = "";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            ""
        );
    });
    it("Given a single letter", function () {
        const words = "H";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "H"
        );
    });
    it("Given two equal letters", function () {
        const words = "HH";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "HH"
        );
    });
    it("Given two letters", function () {
        const words = "Ho";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "Ho"
        );
    });
    it("Given two words of less than five letters", function () {
        const words = "Hola feo";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "Hola feo"
        );
    });
    it("Given three of more words of less than five letters", function () {
        const words = "Hola feo que pasa";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "Hola feo que pasa"
        );
    });
    it("Given one word with more than five letters", function () {
        const words = "Refrigerio";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "oiregirfeR"
        );
    });
    it("Given two words with more than five letters", function () {
        const words = "Tómate refrigerios";
        expect(reverseWords.spinWords(words)).toStrictEqual(
            "etamóT soiregirfer"
        );
    });
});


describe('reversedWord Acceptance Tests', function () {
    it("should pass a sample test", function() {
        expect(reverseWords.spinWords("Hey fellow warriors")).toStrictEqual("Hey wollef sroirraw");
    });
})
