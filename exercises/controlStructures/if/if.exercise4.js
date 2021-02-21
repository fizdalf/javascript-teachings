// Comprueba 4 números que te den en la terminal y el programa te devolverá aquellos que son divisibles entre 2

const arguments = process.argv;

const number1 = parseInt(arguments[2]);
const number2 = parseInt(arguments[3]);
const number3 = parseInt(arguments[4]);
const number4 = parseInt(arguments[5]);

let divisible1 = "es divisible";
if (number1 %2 !== 0) {
    divisible1 = ((number1 ) + "no es divisible entre 2");
}
console.log(divisible1);

let divisible2 = "es divisible";
if(number2 %2 !== 0) {
    divisible2 = ((number2 ) + "no es divisible entre 2");
}
console.log(divisible2);

let divisible3 = "es divisible"
if(number3 %2 !== 0) {
    divisible3 = ((number3 ) + "no es divisible entre 2")
}
console.log(divisible3)

let divisible4 = "es divisible"
if(number4 %2 !== 0) {
    divisible4 = ((number4 ) + "no es divisible entre 2")
}
console.log(divisible4)