// Create a function "applyArrayFunction" that receives two arguments, one is an array and the other is a function, "applyArrayFunction"
// must return an array but each item must be the result of calling the argument function on each item
// Example: applyArrayFunction([1,2,3],(number)=> number + 2) -> [3,4,5]
// Example: applyArrayFunction(["test","something","nothing"], (string) => string + ".") -> ["test.", "something.","nothing."]


// function plusTwo(number){
//     return number + 2
// }
//
// function applyArrayFunction(numbers, anotherFunction) {
//     const result = [];
//     let index = 0;
//     let lastIndex = numbers.length - 1;
//     while (index <= lastIndex) {
//         const eachNumber = anotherFunction(numbers[index])
//         result.push(eachNumber);
//         index++;
//     }
//     return result;
// }
//
// console.log(applyArrayFunction([2, 5, 6], plusTwo))

const plusTwo = number => number + 2

const applyArrayFunction = (numbers, anotherFunction) => {
    const result = [];
    let index = 0;
    let lastIndex = numbers.length - 1;
    while (index <= lastIndex) {
        const eachNumber = anotherFunction(numbers[index])
        result.push(eachNumber);
        index++;
    }
    return result;
}

console.log(applyArrayFunction([2, 5, 6], plusTwo))
