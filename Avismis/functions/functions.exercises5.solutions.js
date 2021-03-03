// Crea una función leagueCalculator que recibe 3 argumentos
// wins     -> la cantidad de partidos ganados
// draws    -> la cantidad de partidos empatados
// losses   -> la cantidad de partidos perdidos
// la función ha de devolver los puntos que tiene el equipo sabiendo que los partidos ganados dan 3 puntos, los empatados 1 y los perdidos 0.
// Ejemplos:
// leagueCalculator(3, 4, 2) ➞ 13
// leagueCalculator(5, 0, 2) ➞ 15
// leagueCalculator(0, 0, 1) ➞ 0

function leagueCalculator(wins, draws, losses) {
    return (3 * wins) + draws
}

const [, , ...restOfElements] = process.argv

let wins = parseInt(restOfElements[0])
let draws = parseInt(restOfElements[1])

const resultNumber = leagueCalculator(wins, draws)
let message = "The total amount of points are " + resultNumber

console.log(message)
