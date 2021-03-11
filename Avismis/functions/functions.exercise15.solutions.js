// create a function createMultiplyByFunction that receives a number as argument and return a function that receives a number as argument,
// this returned function must return the multiplication of the createMultiplyByFunction number and the number it receives
// Example:
// const multiplyByTwo = createMultiplyByFunction(2);
// multiplyByTwo(5) -> 10
// Example:
// const multiplyByMinusSix = createMultiplyByFunction(-6);
// multiplyByMinusSix(-7) -> 42



const [, , ...arguments] = process.argv

let number = arguments[0]
let number1 = arguments[1]

const oneFunction = number => createMultiplyByFunction(number1) * number

const createMultiplyByFunction = number1 => {
    return oneFunction
}


