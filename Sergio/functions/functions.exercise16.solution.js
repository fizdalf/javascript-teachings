// Create a function repeatStringArray(s,n) that receives 2 parameters, a string s and a number n, and it returns an array with s repeated n times
// Example: repeatStringArray("hi",4) -> ["hi", "hi", "hi", "hi"]


function repeatStringArray(string, number) {
    return [string + number]
}

console.log(repeatStringArray("hi",4))