import {deleteThePreviousLetter} from "./backspaceDeletedString";

describe("deleteThePreviousLetter", function () {
    it("should return every single character of the string", function (){
        let word: string = "";
        expect(deleteThePreviousLetter()).toStrictEqual("")
    })
})
