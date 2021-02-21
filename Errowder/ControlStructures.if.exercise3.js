// Dado los siguientes colores "Rojo"  y "Verde", message es message deberá responder "que color mas intenso" y message es verde dirá "Ese no es intenso"

const arguments = process.argv;

const color = arguments [2];

let message = "¡Qué color más intenso!"
if (color !== "rojo") {
    message = "Ese no es intenso"
}
console.log(message);
