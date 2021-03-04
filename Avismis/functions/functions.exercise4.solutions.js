// Crea una función paintCanCalculator que recibe 4 argumentos,
// paintCoverRate   -> la cantidad de metros cuadrados que puedo pintar con un bote de pintura
// wallHeight       -> el alto de la pared que quiero pintar
// wallWidth        -> el ancho de la pared que quiero pintar
// numberOfWalls    -> el número de paredes con éstas dimensiones
// y devuelve el número de botes de pintura que necesitaré para pintar las paredes completas
// así por ejemplo :
// paintCanCalculator(1,1,1,1)   -> 1
// paintCanCalculator(10,1,1,10) -> 1


function paintCanCalculator(paintCoverRate, wallHeight, wallWidth, numberOfWalls) {
    return (wallHeight * wallWidth) * numberOfWalls / paintCoverRate
}

const [, , ...restOfElements] = process.argv

let paintCoverRate = parseInt(restOfElements[0])
let wallHeight = parseInt(restOfElements[1])
let wallWidth = parseInt(restOfElements[2])
let numberOfWalls = parseInt(restOfElements[3])

const resultNumber = paintCanCalculator(paintCoverRate, wallHeight, wallWidth, numberOfWalls)
let message = "You will need " + resultNumber + " painting can(s)"

console.log(message)
