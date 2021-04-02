// Create a function forEach(array,callbackFn) that receives
// an array and a callback function, and calls the function
// with each of the items of the array
//forEach([1,2,3], console.log)  //-> shows 1 then 2 and the 3 in the terminal
//forEach(["hola", "adios", "tolete"], (x) => console.log(x.split('').reverse().join(''))
// -> shows "aloh" then "soida" then "etelot" in the terminal

function forEach(array, callbackFn) {
    let emptyArray = []
    array.push(emptyArray) //
    callbackFn.push(emptyArray) // ERROR!!!
    callbackFn.forEach()
}


forEach([1, 2, 3], console.log);
