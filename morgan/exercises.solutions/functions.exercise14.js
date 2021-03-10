// Create a function createSumTwoFunction that return as function that sums two numbers
// createSumTwoFunction()(4,5) -> 9
// createSumTwoFunction()(7,9) -> 16

function creatSumTwoFunction() {
    function firstFunction(number1, number2) {
        return number1 + number2
    }

    return firstFunction;
}

console.log(creatSumTwoFunction());
