import {Kata} from "./spinWords";

describe("spinWords Acceptance Test", function(){
    it("should pass a sample test", function() {
        expect(Kata.spinWords("Hey fellow warriors")).toStrictEqual("Hey wollef sroirraw");
    });
});

describe("spinWords My Tests",function (){
    it("should return empty string if we dont get any word",function (){
        expect(Kata.spinWords("")).toStrictEqual("");
    })
    it("should return the same character if recive only a character", function (){
        expect(Kata.spinWords("W")).toStrictEqual("W");
    })
    it("should invert word if have more than 5 characters",function (){
        expect(Kata.spinWords("Penelope")).toStrictEqual("epoleneP")
    })
    it("should invert words if the word have more than 5 characters",function (){
        expect(Kata.spinWords("Hola Pedro")).toStrictEqual("Hola ordeP")
    })
    it("should return the inverted words",function (){
        expect(Kata.spinWords("pepe come jamon del mercadona")).toStrictEqual("pepe come nomaj del anodacrem")
    })
})