'use strict';
const argumentsReceivedFromTerminal = process.argv;

const thirdArgument = argumentsReceivedFromTerminal[2];
let message;
if ("red" === thirdArgument) {
    message = "What an intense color!";
} else if ("green" === thirdArgument) {
    message = "That is not an intense color";
}
console.log(message);
