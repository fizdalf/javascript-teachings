// create a function createMultiplyByFunction that receives a number as argument and return a function that receives a number as argument,
// this returned function must return the multiplication of the createMultiplyByFunction number and the number it receives
// Example:
// const multiplyByTwo = createMultiplyByFunction(2);
// multiplyByTwo(5) -> 10
// Example:
// const multiplyByMinusSix = createMultiplyByFunction(-6);
// multiplyByMinusSix(-7) -> 42

function createMultiplyByFunction(number2) {
    function firstMultiplyFunction(number1) {
        return number2 * number1
    }

    return firstMultiplyFunction
}
console.log(createMultiplyByFunction(2)(5))
