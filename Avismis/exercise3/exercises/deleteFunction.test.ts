import {cleanString} from "./deleteFunction";

describe('cleanString Acceptance Test', function () {
    it("no String Option", function () {
        const s = "";
        expect(cleanString(s)).toStrictEqual(
            ""
        );
    });
    it("no # option", function () {
        const s = "abcdestupid";
        expect(cleanString(s)).toStrictEqual(
            "abcdestupid"
        );
    });
    it("one # among the string", function () {
        const s = "#"
        expect (cleanString(s)).toStrictEqual(
            ""
        );
    })
    it("two # among the string", function () {
        const s = "##"
        expect (cleanString(s)).toStrictEqual(
            ""
        );
    })
    it("any amount of # among the string", function () {
        const s = "####"
        expect (cleanString(s)).toStrictEqual(
            ""
        );
    })
})