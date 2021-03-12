// Create a function createSumTwoFunction that return a function that sums two numbers
// createSumTwoFunction()(4,5) -> 9
// createSumTwoFunction()(7,9) -> 16

function createSumTwoFunction() {
    return (a, b) => a + b
}
const sumFunction = createSumTwoFunction();

console.log(createSumTwoFunction()("a", 9));