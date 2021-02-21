// Dado los siguientes colores "Rojo"  y "Verde", si es rojo deberá responder "que color mas intenso" y si es verde dirá "Ese no es intenso"

const arguments = process.argv;

const color = arguments [2];

let rojo = "¡Qué color más intenso!"
if (color !== rojo) {
    rojo = "Ese no es intenso"
}
console.log(rojo);