// Dado por terminal un número N entero positivo > 0 escribe un programa que dibuje un arbolito con N niveles , como el que se dibuja en el siguiente comentario (descoméntalo y ejecútalo para ver como debería quedar el arbolito)
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
'use strict'

const arg = process.argv;
let base = 0
const index = 2
const lastIndex = arg.length - 1;
const tree = arg[index]
let arbol1 = '*'
let arbol2 = '**'
let arbol = arbol1 + arbol2

while (base !== tree) {
    arbol++

}

console.log(arbol)