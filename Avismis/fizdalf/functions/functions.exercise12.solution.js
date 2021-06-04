// Create a function "applyArrayFunction" that receives two arguments, one is an array and the other is a function, "applyArrayFunction" must return an array but each item must be the result of calling the argument function on each item
// Example: applyArrayFunction([1,2,3],(number)=> number + 2) -> [3,4,5]
// Example: applyArrayFunction(["test","something","nothing"], (string) => string + ".") -> ["test.", "something.","nothing."]


function applyArrayFunction(array, someFunction) {
    let index = 0
    let lastIndex = array.length - 1;
    let lista = []
    while (index <= lastIndex) {
        lista.push(someFunction(array[index]));
        index++
    }
    return lista;
}

function test(number) {
    return number + 2;
}

console.log(applyArrayFunction(["test","something","nothing"], (string) => string + "."));
console.log(applyArrayFunction(["test", "something", "nothing"], (string) => string + "."));
