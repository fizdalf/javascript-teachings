// Crea una función paintCanCalculator que recibe 4 argumentos,
// paintCoverRate   -> la cantidad de metros cuadrados que puedo pintar con un bote de pintura
// wallHeight       -> el alto de la pared que quiero pintar
// wallWidth        -> el ancho de la pared que quiero pintar
// numberOfWalls    -> el número de paredes con éstas dimensiones
// y devuelve el número de botes de pintura que necesitaré para pintar las paredes completas
// así por ejemplo :
// paintCanCalculator(1,1,1,1)   -> 1
// paintCanCalculator(10,1,1,10) -> 1

let arguments = process.argv
let firstIndex = 2;
let secondIndex = 3;
let thirdIndex = 4;
let lastIndex = arguments.length -1;

let paintCoverRate = parseInt(arguments[firstIndex])
let wallHeight = parseInt(arguments[secondIndex])
let wallWidth = parseInt(arguments[thirdIndex])
let numberOfwalls = parseInt(arguments[lastIndex])

let fullWall = wallHeight * wallWidth;
let result = fullWall * numberOfwalls;
 
