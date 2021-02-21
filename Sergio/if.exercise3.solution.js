// Dado los siguientes colores "Rojo"  y "Verde", si es rojo deberá responder "que color mas intenso" y si es verde dirá "Ese no es intenso"
const arguments = process.argv;

const color1 = (arguments[2]);

if (color1 === 'Rojo') {
    message = "que color más intenso";
}
if (color1 === 'Verde'){
    message= 'Ese no me interesa'
}
console.log(message);