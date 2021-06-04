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
// console.log("  *");
// console.log(" ***");
// console.log("*****");
// console.log("  *");
// console.log("  *");
// console.log();
'use strict'

const args = process.argv;
const startingIndex = 2
const N = parseInt(args[startingIndex]);

let currentLevel = 1;
while (currentLevel <= N) {
    let asterisksInLevel = "";
    const requiredAsterisks = currentLevel * 2 - 1;
    while (asterisksInLevel.length < requiredAsterisks) {
        asterisksInLevel = asterisksInLevel + "*";
    }
    const requiredSpaces = N - currentLevel;
    let spacesInLevel = "";
    while (spacesInLevel.length < requiredSpaces) {
        spacesInLevel = spacesInLevel + " ";
    }
    console.log(spacesInLevel + asterisksInLevel);
    currentLevel++;
}
const trunkRequiredSpaces = N - 1;
let trunkPiece = '*';
let amountOfSpacesAlreadyInTheTrunk = 0
while (amountOfSpacesAlreadyInTheTrunk < trunkRequiredSpaces) {
    trunkPiece = " " + trunkPiece;
    amountOfSpacesAlreadyInTheTrunk++;
}
const trunkPiecesToPrint = 2;
let trunkPiecesPrinted = 0;
while (trunkPiecesPrinted < trunkPiecesToPrint) {
    console.log(trunkPiece);
    trunkPiecesPrinted++;
}

