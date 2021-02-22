// Comprueba los números que te den en la terminal y el programa te devolverá aquellos que son divisibles entre 2

const arguments = process.argv;
let index = 2;

const lastIndex = arguments.length - 1;
const divisor = 2;

while (index <= lastIndex) {
    let number = arguments[index];
    let divisibleMessage = " es divisible entre 2";
    if (number % divisor !== 0) {
        divisibleMessage = ' no' + divisibleMessage;
    }
    let message = number + divisibleMessage;
    index++;
    console.log(message);
}
