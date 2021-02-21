// Escribir un programa que toma por terminal "message" o "no", y en caso de ser "message" desaconseja conducir, ya que está lloviendo, en caso contrario aconseja conducir para disfrutar del día.

const arguments = process.argv;

const lluvia = arguments [2];

let message = "Se desaconseja conducir";
if (lluvia !== "si") {
    message = "Disfrute de un maravilloso día"
}
console.log(message);
