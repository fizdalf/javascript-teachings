// Create a function map(array,transformation) that receives
// an array and a transformation function, a
// nd returns an array with
// the result of calling the transformation function
// with each item of the array
// (the resulting array must have the same amount of elements)
// Example: console.log(map([1,2,3], (x) => x ** 2 ))  -> shows [1,4,9] in the terminal
// Example: console.log(map(["hola", "adios", "tolete"],
// (x) => x.toUpperCase()) -> shows ["HOLA", "ADIOS", "TOLETE"] in the terminal

function map(array,transformation){
    let emptyArray = []
    array.push(emptyArray)
let result = transformation
    result.push(emptyArray)
    return emptyArray;
}