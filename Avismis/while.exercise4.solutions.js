// Crea un programa que recibe un número por terminal e imprime por pantalla una lista de sus factores, o lo que es lo mismo,
// los números enteros positivos por los cuales el numero dado es divisible
// https://www.disfrutalasmatematicas.com/numeros/factores-todos-tool.html
// Quizás quieras saber que para añadir algo a una lista usamos push
// const lista = [1,2,3,4];
// lista.push(7);
// console.log(lista) -> [1,2,3,4,7]

const arguments = process.argv;
const number = parseInt(arguments[2]);
let factorsList = [];
let factor = 1;
while (Math.sqrt(number) >= factor) {
    console.log(`comprobando si ${factor} es un factor de ${number}`)
    if (number % factor === 0) {
        console.log(`${factor} es un factor de ${number}!! añadelo a la lista!`);
        factorsList.push(factor);
        factorsList.push(number / factor);
    }
    factor++;
}

factorsList.sort((a, b) => a - b);
let message = "El/Los factor/es de " + number + " es/son " + factorsList;
console.log(message);
