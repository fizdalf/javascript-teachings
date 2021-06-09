import isPalindrome from "./src/isPalindrome";

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
            ${'arenera'}  | ${true}
            ${'oso'}      | ${true}
            ${'salas'}    | ${true}
        `(
        'it should return true when the given string is a palindrome',
        ({string, result}) => {
            expect(isPalindrome(string)).toStrictEqual(result);
        }
    )
})
