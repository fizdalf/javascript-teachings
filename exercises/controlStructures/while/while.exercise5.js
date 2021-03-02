// dado un número N por terminal escribir por pantalla una lista con los primeros N números primos
'use strict'

const args = process.argv;
const number = parseInt(args[2]); // 4
const primeNumbersList = []; // [1,2,3,5]
let primeToBeTested = 1;
while (primeNumbersList.length < number) {
    let startingNumber = 2;
    let isPrime = true;
    while (startingNumber < primeToBeTested) {
        if (primeToBeTested % startingNumber === 0) {
            isPrime = false;
            break;
        }
        startingNumber++;
    }
    if (isPrime) {
        primeNumbersList.push(primeToBeTested);
    }
    primeToBeTested++;
}

console.log(primeNumbersList);

Number.NEGATIVE_INFINITY; 
