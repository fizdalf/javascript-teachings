// Create a function forEach(array,callbackFn) that receives an array and a callback function, and calls the function
// with each of the items of the array
// Example: forEach([1,2,3], console.log)  -> shows 1 then 2 and the 3 in the terminal
// Example: forEach(["hola", "adios", "tolete"], (x) => console.log(x.split('').reverse().join('')) -> shows "aloh" then "soida" then "etelot" in the terminal

function forEach(array, callbackFn) {
    let i = 0;
    let newArray = []
    while (i <= array.length - 1) {
        newArray.push(callbackFn(array[i]))
        i++
    }
    return newArray
}

console.log(forEach([1, 2, 3], console.log))