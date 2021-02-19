// Ejercicio en el que tome por consola el nombre de un vegetal y si es tomates te responde Junio y si no, te diga que los tomates son geniales.
const arguments = process.argv;

const veg1 = (arguments[2]);

let message = "Junio";
if (veg1 !== 'Tomate') {
    message = "Los tomates son geniales";
}
console.log(message);

