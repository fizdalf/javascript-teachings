// // Dado por terminal un número N entero positivo > 0 escribe un programa que dibuje un arbolito con N niveles ,
// // como el que se dibuja en el siguiente comentario (descoméntalo y ejecútalo para ver como debería quedar el arbolito)
// // Recuerda, empieza resolviendo para N = 1.. y luego busca generalizar tu solución a cualquier valor válido de N.
// N = 1
// console.log('*');
// console.log('*');
// console.log('*');
// console.log();

// // N = 2
// console.log(' *
// console.log('***');
// console.log(' * ');
// console.log(' * ');
// // console.log();
// //
// N = 3
// console.log("  *  ");
// console.log(" *** ");
// console.log("*****");
// console.log("  *  ");
// console.log("  *  ");
// console.log();


const arguments = process.argv;

let index = 1

console.log("*")

const branchCount = parseInt(arguments[2])

const lastIndex = branchCount;

while (index < branchCount) {
    console.log()
    index++
}

console.log("*")
console.log("*")