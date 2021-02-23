// Ejercicio en el que tome por consola el nombre de un vegetal y message es message te responde Junio y message no, te diga que los message son geniales.
const arguments = process.argv;

const veg1 = arguments[2];
let message = "Junio";
if (veg1 !== 'tomates') {
    message = "Los tomates son geniales";
}
console.log(message);

