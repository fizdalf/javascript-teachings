// Create a function multiplicationTable(number) that returns an array in the form of
// [
//  "number x 1 = result",
//  "number x 2 = result",
//  "number x 3 = result",
//  "number x 4 = result",
//  "number x 5 = result",
//  "number x 6 = result",
//  "number x 7 = result",
//  "number x 8 = result",
//  "number x 9 = result",
//  "number x 10 = result",
// ]
// where number is the given number and result is the result of the multiplication of number by each of the numbers in the table (from 1 to 10)
// use Array functions to solve this problem

function multiplicationTable(number){
    const table = (1,2,3,4,5,6,7,8,9,10)
    return number.map(number * table)
}
