// write a function that receives an array of numbers as parameter and returns the average
// Example: average([1,2,3,4,5]) -> 3

function numbersAverage([numbers]){
    const arguments = process.argv;

    let index = 2;
    let total = 0

    const lastIndex = arguments.length - 1;

    while (index <= lastIndex) {
        total = parseInt(arguments[index]) + total
        index++
    }
    const itemsCount = arguments.length - 2;
    average = total / itemsCount
    return average
}

console.log(numbersAverage(arguments))
