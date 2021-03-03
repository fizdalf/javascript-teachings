// Crea una función leagueCalculator que recibe 3 argumentos
// wins     -> la cantidad de partidos ganados
// draws    -> la cantidad de partidos empatados
// losses   -> la cantidad de partidos perdidos
// la función ha de devolver los puntos que tiene el equipo sabiendo que los partidos ganados dan 3 puntos, los empatados 1 y los perdidos 0.
// Ejemplos:
// leagueCalculator(3, 4, 2) ➞ 13
// leagueCalculator(5, 0, 2) ➞ 15
// leagueCalculator(0, 0, 1) ➞ 0

const arguments = process.argv;
let index = 2
const lastIndex = arguments.length - 2
const win = parseInt(arguments[index]) *3
const draw = parseInt(arguments[lastIndex])
const losses = 0

function points() {
    points = win + draw
    return points
}

console.log("Tienen " + points() + " puntos.")