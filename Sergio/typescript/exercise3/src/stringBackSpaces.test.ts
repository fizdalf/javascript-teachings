import {cleanString} from "./stringBackSpaces";

describe("cleanString acceptation tests", () => {
    it("delete a letter for each #", () => {
        expect(cleanString('abc#d##c')).toStrictEqual("ac")
    });
    it("delete a letter for each #", () => {
        expect(cleanString('abc####d##c#')).toStrictEqual("")
    })
});

describe("cleanString my tests", () => {
    it("should return an empty string if we get only #", () => {
        expect(cleanString('####')).toStrictEqual("")
    })
    it("should return an empty string if we get an epty string", () => {
        expect(cleanString('')).toStrictEqual("")
    })
    it('should return the string recived if there are not #', () => {
        expect(cleanString('abejsif')).toStrictEqual('abejsif')
    })
})