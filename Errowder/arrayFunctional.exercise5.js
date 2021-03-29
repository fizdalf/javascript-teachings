// Create a function forEach(array,callbackFn) that receives an array and a callback function, and calls the function
// with each of the items of the array
// Example: forEach([1,2,3], console.log)  -> shows 1 then 2 and the 3 in the terminal
// Example: forEach(["hola", "adios", "tolete"], (x) => console.log(x.split('').reverse().join('')) -> shows "aloh" then "soida" then "etelot" in the terminal

function forEach(array, callbackFn) {
    for (let i = 0; i <= array.length - 1; i++) {
        callbackFn(array[i], i, array);
    }
}

forEach([1, 2, 3], console.log);
const myReverseFunction = (item) => console.log(item.split('').reverse().join(''));
forEach(["hola", "adios", "tolete"], myReverseFunction);


[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(() => console.log('pepe'));
