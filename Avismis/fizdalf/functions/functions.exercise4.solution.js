// Crea una función paintCanCalculator que recibe 4 argumentos,
// paintCoverRate   -> la cantidad de metros cuadrados que puedo pintar con un bote de pintura
// wallHeight       -> el alto de la pared que quiero pintar
// wallWidth        -> el ancho de la pared que quiero pintar
// numberOfWalls    -> el número de paredes con éstas dimensiones
// y devuelve el número de botes de pintura que necesitaré para pintar las paredes completas
// así por ejemplo :
// paintCanCalculator(1,1,1,1)   -> 1
// paintCanCalculator(10,1,1,10) -> 1
'use strict';

const [, , paintCoverRateString, wallHeightString, wallWidthString, numberOfWallsString] = process.argv
let paintCoverRate = parseInt(paintCoverRateString)
let wallHeight = parseInt(wallHeightString)
let wallWidth = parseInt(wallWidthString)
let numberOfWalls = parseInt(numberOfWallsString)

function paintCanCalculator(paintCoverRate, wallHeight, wallWidth, numberOfWalls) {
    return (wallHeight * wallWidth) * numberOfWalls / paintCoverRate;
}

let message = 'Los botes de pintura necesarios son ' + paintCanCalculator(paintCoverRate, wallHeight, wallWidth, numberOfWalls)

console.log(message)
