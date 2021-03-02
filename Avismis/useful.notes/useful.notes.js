// Como medir la cantidad de letras en una palabra dada en terminal
//
// const arguments = process.argv;
//
// let index = arguments[2]
//
// console.log(index.length)
//
// // Como buscar la mitad de esa medida
//
// console.log(index.length / 2)
//
//
// //Funciones
//
// function sumaTresNumeros(number1, number2, number3) {
//
//     return number1 + number2 + number3
//
// }
//
// let result = sumaTresNumeros(3, 5, 3)
//
// console.log(result)

// *********************************************************************************************************


function siono(loQueSea) {

    if (loQueSea) {
        console.log("Sí")
    } else {
        console.log("No")
    }
}

function multiplicaEstosNumeros(number1, number2) {
    return number1 * number2

}

function elNumeroMayor(number1, number2) {
    return number1 > number2
}

let result = multiplicaEstosNumeros(4, 5)

console.log(result)

let result2 = multiplicaEstosNumeros(3, 97)

console.log(result2)

let result3 = elNumeroMayor(result, result2)

siono(result3)
