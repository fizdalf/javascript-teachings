// write a function that receives an array of numbers as parameter and returns the average
// Example: average([1,2,3,4,5]) -> 3
// Example: average([5,3,2,1,4]) -> 3

function average(arrayOfNumbers) {
    let index = 0
    let sum = 0
    while (index <= arrayOfNumbers.length - 1) {
        let number = parseInt(arrayOfNumbers[index])
        sum = sum + number
        index++
    }
    return sum / arrayOfNumbers.length;
}