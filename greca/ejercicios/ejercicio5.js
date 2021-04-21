// Crea un programa que muestra por pantalla el numero recibido por terminal multiplicado por 2 si es divisible entre 5 y
// multiplicado por 100 si es menor de 3
const [, , dato] = process.argv;
const numero = parseInt(dato);
// Tu ejercicio empieza debajo de ésto lo de arriba NO SE TOCA
let resultado = numero;//6
if (numero % 5 === 0) {
    resultado = numero * 2
}

if (numero < 3) {
    resultado = resultado * 100
}

console.log(resultado);