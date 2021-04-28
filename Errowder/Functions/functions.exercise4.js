// Crea una función paintCanCalculator que recibe 4 argumentos,
// paintCoverRate   -> la cantidad de metros cuadrados que puedo pintar con un bote de pintura
// wallHeight       -> el alto de la pared que quiero pintar
// wallWidth        -> el ancho de la pared que quiero pintar
// numberOfWalls    -> el número de paredes con éstas dimensiones
// y devuelve el número de botes de pintura que necesitaré para pintar las paredes completas
// así por ejemplo :
// paintCanCalculator(1,1,1,1)   -> 1
// paintCanCalculator(10,1,1,10) -> 1

const arguments = process.argv;
let index = 2
const lastIndex = arguments.length - 1

let paintCoverRate = parseInt(arguments[index])
const wallHeight = parseInt(arguments[index + 1])
const wallWidth = parseInt(arguments[index + 2])
const numberOfWalls = parseInt(arguments[lastIndex])

function paintCanCalculator(paintCoverRate, wallHeight, wallWidth, numberOfWalls) {
    return (wallHeight * wallWidth) * numberOfWalls / paintCoverRate
}

console.log("You will need " + paintCanCalculator() + " cans of paint")
