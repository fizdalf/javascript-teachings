import isPalindrome from "./isPalindrome";

describe('isPalindrome', () => {


    it.each`
                string     |  result
            ${'hola'}      | ${false}
            ${'perro'}     | ${false}
            ${'gaviota'}   | ${false}
            ${'maleta'}    | ${false}
        `(
        'it should return false when the given string is not a palindrome',
        ({string, result}) => {

            expect(isPalindrome(string)).toStrictEqual(result);
        }
    )

    it.each`
                string    |  result
            ${'arepera'}  | ${true}
            ${'reconocer'}| ${true}
            ${'oso'}      | ${true}
            ${'salas'}    | ${true}
        `(
        'it should return true when the given string is a palindrome',
        ({string, result}) => {
            expect(isPalindrome(string)).toStrictEqual(result);
        }
    )
})
describe('isPalindrome my test', () => {
    it('should return false if is not a (short) palindrome', () => {
        expect(isPalindrome('abe')).toStrictEqual(false);
    })
    it('should return false if is a (short) palindrome', () => {
        expect(isPalindrome('aba')).toStrictEqual(true);
    })
})
