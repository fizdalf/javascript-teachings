// Create a function createSumTwoFunction that return a function that sums two numbers
// createSumTwoFunction()(4,5) -> 9
// createSumTwoFunction()(7,9) -> 16

const sumTwoNumbers = (number1, number2) => number1 + number2

function createSumTwoFunction() {
    return sumTwoNumbers
}
console.log(createSumTwoFunction()(1, 5))
