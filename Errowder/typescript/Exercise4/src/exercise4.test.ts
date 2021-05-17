import {reverseWordsWith5OrMoreCharacters} from "./Exercise4"

describe (reverseWordsWith5OrMoreCharacters, function(){
    it("should return an empty string", function(){
        let sentence: string = ""
        expect(reverseWordsWith5OrMoreCharacters(sentence))
    })
    it("Return a character", function(){
        let sentence: string = "h"
        expect(reverseWordsWith5OrMoreCharacters(sentence)).toStrictEqual("h")
    })
    it("Return a word with 4 or less characters", function(){
        let sentence: string = "hola"
        expect(reverseWordsWith5OrMoreCharacters(sentence)).toStrictEqual("hola")
    })
    it("return a word with 5 or more characters", function(){
        let sentence: string = "alvaro"
        expect(reverseWordsWith5OrMoreCharacters(sentence)).toStrictEqual("oravla")
    })
    it("Return a sentence with words with 4 or less characters", function(){
        let sentence: string = "hola xavi"
        expect(reverseWordsWith5OrMoreCharacters(sentence)).toStrictEqual("hola xavi")
    })
    it ("Return a sentence with words reversed if they have 5 or more character", function(){
        let sentence: string = "xavi negro"
        expect(reverseWordsWith5OrMoreCharacters(sentence)).toStrictEqual("xavi orgen")
    })
})