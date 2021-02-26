const arguments = process.argv;

const raining = arguments[2]
let message = "It is not recommended for you to drive"
if (raining !== "yes") {
    message = "You can drive. Have a great day out.";
}
console.log(message);
