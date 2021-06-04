//Para escribir en el terminal poner:
//node (poner el nombre del archivo que se quiera usar)

//If, es un elemento de condicionalidad (si X entonces pasa Y)

//Se usa con If(X) {Y}, solo se aplicara si X es verdad, si es falso no se ejecutará el resto

//Else, es un elemento que significa "sino"
//Se usa:

if (3>0) {
    console.log("Es mayor")
} else {
    console.log("Es menor")
}

//Tambíen podemos usar:
if(x){
} else if (Y){
} else (Z)

//Si hay más de un caso


//Ejemplos

let name = arguments [2];
const god = "alvaro";

if (god === name) {
    console.log("hola puto amo";
} else {
    console.log("hola " + name);
}

//Si el nombre es alvaro, pondrá "hola puto amo", si no es el caso dirá "hola X"

//En un caso de comparar 2 numeros y querer que me diga cual es el mayor

const number1 = parseInt(arguments[2]);
const number2 = parseInt(arguments[3]);

let maxNumber = number1;

if (number2 > maxNumber) {
    maxNumber = number2;
}

console.log(maxNumber)


//Para saber si es divisible o no

let message = "es divisible"

if (number1 % number2 !==0) {
    message = "no es divisible";
}

console.log(message);

//Siempre saldrá el mensaje de "es divisible" a menos que la condición de if(x) se de, en ese caso saldrá "no es divisible