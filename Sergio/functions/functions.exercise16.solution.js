// Create a function repeatStringArray(s,n) that receives 2 parameters, a string s and a number n, and it returns an array with s repeated n times
// Example: repeatStringArray("hi",4) -> ["hi", "hi", "hi", "hi"]


function repeatStringArray(string, number) {
    let index = 0
    let actualArray = []
    while (index < number){
        actualArray.push(string)
        index++
    }
    return actualArray
}

console.log(repeatStringArray("hi",4))

//arreglao
