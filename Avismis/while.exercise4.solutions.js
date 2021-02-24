// Crea un programa que recibe un número por terminal e imprime por pantalla una lista de sus factores, o lo que es lo mismo,
// los números enteros positivos por los cuales el numero dado es divisible
// https://www.disfrutalasmatematicas.com/numeros/factores-todos-tool.html
// Quizás quieras saber que para añadir algo a una lista usamos push
// const lista = [1,2,3,4];
// lista.push(7);
// console.log(lista) -> [1,2,3,4,7]

const arguments = process.argv;

const index = 2;

const number = parseInt(arguments[2]);

let factorsList = [];

let factor = 0;

while (number > factor) {
    if (number % factor === 0) {
    }
    factor = factorsList.push;

    factor++;
}

let message = "El/Los factor/es de " + (arguments[2]) + " es/son " + factorsList;

console.log(message)