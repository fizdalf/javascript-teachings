// Ejercicio en el que tome por consola el nombre de un vegetal y si es tomates te responde Junio y si no, te diga que los tomates son geniales.

const arguments = process.argv;

const verdura = arguments [2];

let tomates = "Junio";
if (verdura !== tomates) {
    tomates = "Los tomates son geniales";
}
console.log(verdura)