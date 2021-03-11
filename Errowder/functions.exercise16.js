// Create a function repeatStringArray(s,n) that receives 2 parameters, a string s and a number n, and it returns an array with s repeated n times
// Example: repeatStringArray("hi",4) -> ["hi", "hi", "hi", "hi"]

function repeatStringArrays(something, number) {
    let index = parseInt(repeatStringArrays(number))
    while (0 < index) {
        result = something + " " + something
        index--
    }
    return repeatStringArrays()
}