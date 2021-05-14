import {deleteThePreviousLetter} from "./backspaceDeletedString";

describe("deleteThePreviousLetter", function () {
    it("should return an empty string", function (){
        let word = "#";
        expect(deleteThePreviousLetter(word)).toStrictEqual("")
    })
})
