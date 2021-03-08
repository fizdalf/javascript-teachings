// For this exercise we are going to use functions within functions!!
// Create a "concatenate" function that receives 2 strings as arguments and returns the strings concatenated with a " - " in the middle
// Example:
// concatenate("Hello","world") -> "Hello - world";
// solve your exercise here below this line

function concatenate(firstString, secondString) {
    return firstString + " - " + secondString;
}

// solve your exercise above this line
// Once you've finished please uncomment the following line as we are going to use this function in another exercise

exports.concatenate = concatenate;

