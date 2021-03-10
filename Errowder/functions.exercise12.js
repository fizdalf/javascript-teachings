// Create a function "applyArrayFunction" that receives two arguments, one is an array and the other is a function, "applyArrayFunction" must return an array but each item must be the result of calling the argument function on each item
// Example: applyArrayFunction([1,2,3],(number)=> number + 2) -> [3,4,5]
// Example: applyArrayFunction(["test","something","nothing"], (string) => string + ".") -> ["test.", "something.","nothing."]

function applyArrayFunction(someArray, OtherFunction) {
    let addFiveToTheFunction = otherFunction => otherFunction + 5
    let result = someArray + addFiveToTheFunction
    return result
}

console.log(applyArrayFunction([59, 55, 87], 1))