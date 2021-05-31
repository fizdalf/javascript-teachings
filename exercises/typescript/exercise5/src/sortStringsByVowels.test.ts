import SortStringsByVowels from './sortStringsByVowels';

describe('sortStringsByVowels', () => {

    it('it should return the same array if an array of one element is given', () => {
        expect(SortStringsByVowels(["test"])).toStrictEqual(["test"]);
    });

    it.each`
             given                      |           expected
         ${['jose','manuel']}           |   ${['manuel', 'jose']}
         ${['barco', 'navio']}          |   ${['navio', 'barco']}
         ${['barco', 'nave']}           |   ${['barco', 'nave']}
         ${['barco', 'nave', 'bajel']}  |   ${['barco', 'nave', 'bajel']}
         ${['barco', 'nave', 'navio']}  |   ${['navio','barco', 'nave']}
         ${['barco', 'navio', 'nave']}  |   ${['navio','barco', 'nave']}
         ${['teclado', 'memoria']}      |   ${['memoria', 'teclado']}
         ${['caserio', 'casa']}         |   ${['caserio', 'casa']}             
                      
    `
    ('it should return the array ordered by descending length of longest sub-string of contiguous vowels ', ({given, expected}) => {
        expect(SortStringsByVowels(given)).toStrictEqual(expected);
    });

});


// Test.assertSimilar(sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
// Test.assertSimilar(sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
// Test.assertSimilar(sortStringsByVowels( ["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);
// Test.assertSimilar(sortStringsByVowels( ["high","day","boot"]) , ["boot","high","day"]);
// Test.assertSimilar(sortStringsByVowels(["none","uuu","Yuuuge!!"]) , ["uuu","Yuuuge!!","none"]);
// Test.assertSimilar(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) , ["GREEEN","AIBRH","YOUNG",""]);
// Test.assertSimilar(sortStringsByVowels(["jyn","joan","jimmy","joey"]) , ["joan","joey","jimmy","jyn"]);
// Test.assertSimilar(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) , ["iiutrqy","uijijeoj","lkjlkjww2"]);
// Test.assertSimilar(sortStringsByVowels(["how about now","a beautiful trio of"]) , ["a beautiful trio of","how about now"]);
// Test.assertSimilar(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) , ["waaaay","bataux","loose","every","is"]);

