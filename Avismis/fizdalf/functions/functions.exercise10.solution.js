// write a function that receives an array of numbers as parameter and returns the average
// Example: average([1,2,3,4,5]) -> 3
// Example: average([5,3,2,1,4]) -> 3

function average(arrayOfNumbers) {
//     let index = 0
//     let suma = 0;
//     while (index <= arrayOfNumbers.length - 1){
//         suma = parseInt(arrayOfNumbers[index]) + suma
//         index++
//     }
//     let media = suma / arrayOfNumbers.length
//
//
//     let index = 0
//     let lastIndex= arrayOfNumbers.length - 1
//     let sum = 0;
//    while(index <= lastIndex){
//         let number = parseInt(arrayOfNumbers[index])
//         sum = number + sum
//        index++
//    }
//
// let media = sum / arrayOfNumbers.length

    let index = 0
    let sum = 0
    while (index <= arrayOfNumbers.length - 1) {
        let number = parseInt(arrayOfNumbers[index])
        sum = sum + number
        index++
    }
    return sum / arrayOfNumbers.length;
}
