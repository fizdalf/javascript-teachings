import {Kata} from "./spinWords";

describe("spinWords Acceptance Test", function(){
    it("should pass a sample test", function() {
        expect(Kata.spinWords("Hey fellow warriors")).toStrictEqual("Hey wollef sroirraw");
    });
});

describe("spinWords My Tests",function (){
    it("should return empty string if we don't get any word",function (){
        expect(Kata.spinWords("")).toStrictEqual("");
    })
    it("should return the same character if receives only a character", function (){
        expect(Kata.spinWords("W")).toStrictEqual("W");
    })
    it("should reverse word if it has 5 or more characters",function (){
        expect(Kata.spinWords("Penelope")).toStrictEqual("epoleneP")
    })
    it("should reverse words that have 5 or more characters",function (){
        expect(Kata.spinWords("Hola Pedro")).toStrictEqual("Hola ordeP")
    })
    it("should return the inverted words",function (){
        expect(Kata.spinWords("pepe come jamon del mercadona")).toStrictEqual("pepe come nomaj del anodacrem")
    })
})
