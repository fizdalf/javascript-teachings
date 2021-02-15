const arguments = process.argv;
let rainChance = parseInt(arguments[2]);
const isPossibleRainChance = 45;
console.log(rainChance);
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

if (rainChance >= guaranteedRainChanceToBringUmbrella) {
    console.log("Make sure to bring your umbrella with you as it's probably going to rain.");
} else if (rainChance >= isPossibleRainChance) {
    console.log("It would be wise to bring your umbrella with you...you never know.");
} else {
    console.log("It's all good, enjoy in the sun!!");
}
