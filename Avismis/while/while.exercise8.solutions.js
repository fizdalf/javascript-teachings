// Si el usuario nos pasa un número por terminal, escribe la tabla de multiplicar de ése número,
// si no pasa ningún número, entonces escribe todas las tablas de multiplicar del 1 al 10.
// Las tablas deberían verse así (descomenta el código, y ejecútalo para ver el resultado)
// console.log("1x1=1");
// console.log("2x1=2");
// console.log("3x1=3");
// console.log("4x1=4");
// console.log("5x1=5");
// console.log("6x1=6");
// console.log("7x1=7");
// console.log("8x1=8");
// console.log("9x1=9");
// console.log("10x1=10");

const arguments = process.argv;

let index = parseInt(arguments[2])


if (!Number.isNaN(index)) {
    let number = arguments[2];
    let counter = 1

    while (counter <= 10) {
        console.log(counter + "x" + number, "= " + (counter * number));
        counter = counter + 1;
    }
} else {
    let externalCounter = 1;
    while (externalCounter <= 10) {
        let counter = 1;
        console.log()
        while (counter <= 10) {
            console.log(counter + "x" + externalCounter, "= " + (counter * externalCounter));
            counter = counter + 1;
        }
        console.log("..............................")
        externalCounter = externalCounter + 1;
    }
}


