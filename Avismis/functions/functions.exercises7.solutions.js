// Write a function named calculateDogAge that:
//     takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
//     Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(yourPuppysAge, conversionRate) {
    if (!conversionRate) {
        conversionRate = 7;
    }
    return yourPuppysAge * conversionRate
}

const yourPuppysAge = process.argv[2]

const resultNumber = calculateDogAge(yourPuppysAge)
let message = "Your doggie is " + resultNumber + " years old in dog years!"

console.log(message)


// function calculateDogAge(yourPuppysAge, yourAge) {
//     if (yourPuppysAge) {
//         return yourPuppysAge * 7
//     } else if (yourAge){
//         return yourAge / 7
//     }
// }
//
// const [, , ...arguments] = process.argv
//
// const yourPuppysAge = parseInt(arguments[0])
// const yourAge = parseInt(arguments[1])
//
// const resultNumber = calculateDogAge(yourPuppysAge)
// let message1 = "Your doggie is " + resultNumber + " years old in dog years!"
//
// console.log(message1)
//
// const resulAge = calculateDogAge(yourAge)
// let message2 = "Your age is " + resulAge + " in dog years"
//
// console.log(message2)
