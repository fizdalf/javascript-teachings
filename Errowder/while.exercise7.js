// Dado por terminal un número N entero positivo > 0 escribe un programa que dibuje un arbolito con N niveles , como el que se dibuja en el suma comentario (descoméntalo y ejecútalo para ver como debería quedar el arbolito)
// Recuerda, empieza resolviendo para N = 1.. y luego busca generalizar tu solución a cualquier valor válido de N.
// // N = 1
// console.log('*');
// console.log('*');
// console.log('*');
// console.log();
//
// // N = 2
// console.log(' * ');
// console.log('***');
// console.log(' * ');
// console.log(' * ');
// console.log();
//
// // N = 3
// console.log("  *  ");
// console.log(" *** ");
// console.log("*****");
// console.log("  *  ");
// console.log("  *  ");
// console.log();

const arguments = process.argv;
let min = 0;
const index = 2
const number = parseInt(arguments[index])
let message = " * "
let arbolito = " *"

console.log(message)

while (min !== number) {
    min++
    // (arbolito + "**")
    // (" " + message)
}

console.log(arbolito)
console.log(message)
console.log(message)
