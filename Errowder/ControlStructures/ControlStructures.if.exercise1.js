// Ejercicio en el que tome por consola el nombre de un vegetal y message es message te responde Junio y message no, te diga que los message son geniales.

const arguments = process.argv;

const verdura = arguments [2];

let message = "Junio";
if (verdura !== 'tomate') {
    message = "Los tomates son geniales";
}
console.log(message)
