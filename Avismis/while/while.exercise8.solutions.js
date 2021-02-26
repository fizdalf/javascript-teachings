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

let min = 0

if (index >= min) {
    let index = arguments[2]

    console.log()
    console.log("1x" + index, "= " + (1 * index));
    console.log("2x" + index, "= " + (2 * index));
    console.log("3x" + index, "= " + (3 * index));
    console.log("4x" + index, "= " + (4 * index));
    console.log("5x" + index, "= " + (5 * index));
    console.log("6x" + index, "= " + (6 * index));
    console.log("7x" + index, "= " + (7 * index));
    console.log("8x" + index, "= " + (8 * index));
    console.log("9x" + index, "= " + (9 * index));
    console.log("10x" + index, "= " + (10 * index));
    console.log("..............................")
} else if (index < min) {
    while (index <= 10) {
        (index = 1)

        index++
    }
}


