// Escribir un programa que toma por terminal "si" o "no", y en caso de ser "si" desaconseja conducir, ya que está lloviendo, en caso contrario aconseja conducir para disfrutar del día.

const arguments = process.argv;

const lluvia = arguments [2];

let si = "Se desaconseja conducir";
if (lluvia !== si) {
    si = "Disfrute de un maravilloso día"
}
console.log(si);