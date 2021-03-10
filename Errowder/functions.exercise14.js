// Create a function createSumTwoFunction that return as function that sums two numbers
// createSumTwoFunction()(4,5) -> 9
// createSumTwoFunction()(7,9) -> 16

function createSumTwoFunction(firstNumber, SecondNumber){
    const sum = sum => sum + firstNumber + SecondNumber
    return sum
}