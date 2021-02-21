const argument = process.argv;
const color1 = (argument[2]);
if (color1 === "rojo") {
    console.log("Que color más intenso");
} else if (color1 === "verde") {
    console.log("Ese no es intenso");
}
