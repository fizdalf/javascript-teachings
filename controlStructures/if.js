const arguments = process.argv; // [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\proyectos\\Personal\\ProyectoMaincra\\controlStructures\\if.js', 'a', 'b','c' ]
//                                                0                       ,                            1                                        ,  2 , 3  , 4
const number1 = parseInt(arguments[2]);
const number2 = parseInt(arguments[3]);

let message = "Es divisible";
if (number1 % number2 !== 0) {
    message = "No es divisible";
}
console.log(message);

const isPossibleRainChance = 45;
const guaranteedRainChanceToBringUmbrella = 60;


// ===
// !==
// >
// <
// >=  4 >= 4 -> true 4 >= 3 -> true 4 >= 7 -> false
// <=  4 <= 4 -> true 4 <= 3 -> false 4 <= 7 -> true
//
// 4 > 4  || 4 === 4
//
//  true || true -> true
//  true || false -> true
//  false || true -> true
//  false || false -> false
//
//  true && true -> true
//  true && false -> false
//  false && false -> false
//  false && false -> false
let rainChance = 10;
if (rainChance >= guaranteedRainChanceToBringUmbrella) {
    console.log("Make sure to bring your umbrella with you as it's probably going to rain.");
} else if (rainChance >= isPossibleRainChance) {
    console.log("It would be wise to bring your umbrella with you...you never know.");
} else {
    console.log("It's all good, enjoy in the sun!!");
}
