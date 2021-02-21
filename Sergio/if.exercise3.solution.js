// Dado los siguientes colores "Rojo"  y "Verde", message es message deberá responder "que color mas intenso" y message es verde dirá "Ese no es intenso"
'use strict';
const args = process.argv;

const color1 = args[2];
let message;
if (color1 === 'Rojo') {
    message = "que color más intenso";
}
if (color1 === 'Verde') {
    message = 'Ese no me interesa'
}
console.log(message);
