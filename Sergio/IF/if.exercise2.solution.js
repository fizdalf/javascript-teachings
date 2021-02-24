// Escribir un programa que toma por terminal "message" o "no", y en caso de ser "message" desaconseja conducir, ya que está lloviendo, en caso contrario aconseja conducir para disfrutar del día.
const arguments = process.argv;

const drive1 = arguments[2];

let message = "Conduce para disfrutar del día";
if (drive1 === 'si') {
    message = "No conduzcas";
}
console.log(message);
