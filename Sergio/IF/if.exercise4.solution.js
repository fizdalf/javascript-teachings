// Comprueba 4 números que te den en la terminal y el programa te devolverá aquellos que son divisibles entre 2

const arguments = process.argv;

const number1 = parseInt(arguments[2]);
const number2 = parseInt(arguments[3]);
const number3 = parseInt(arguments[4]);
const number4 = parseInt(arguments[5]);
const div = 2

let message = "es divisible entre 2";
if (number1 % div !== 0) {
    message = "no es divisible entre 2";
}
console.log(message);
let message1 = "es divisible entre 2";
if (number2 % div !== 0) {
    message1 = "no es divisible entre 2";
}
console.log(message1);
let message2 = "es divisible entre 2";
if (number3 % div !== 0) {
    message2 = "no es divisible entre 2";
}
console.log(message2);
let message3 = "es divisible entre 2";
if (number4 % div !== 0) {
    message3 = "no es divisible entre 2";
}
console.log(message3);


