// Como medir la cantidad de letras en una palabra dada en terminal
//
const arguments = process.argv;

let index = arguments[2]

console.log(index.length)

// Como buscar la mitad de esa medida

console.log(index.length / 2)


// *********************************************************************************************************



//FUNCIONES

function sumaTresNumeros(number1, number2, number3) {

    return number1 + number2 + number3

}

let result = sumaTresNumeros(3, 5, 3)

console.log(result)

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


// *********************************************************************************************************



math.floor ---> usa el primer número entero más bajo   (2,5 ---> 2)
math.ceil ---> usa el primer número entero más alto     (2,5 ----> 3)



// *********************************************************************************************************


//RECURRENCIA



function test(string, reversed) {
    if (!reversed) {
        reversed = '';
    }
    const index = string.length - reversed.length;
    reversed += string[index - 1];
    if (reversed.length === string.length) {
        return reversed;
    }
    return test(string, reversed);
}

const reverse = test("hola");

console.log(reverse);


// *********************************************************************************************************


