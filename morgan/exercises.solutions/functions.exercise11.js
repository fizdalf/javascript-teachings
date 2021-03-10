// Create a function that receives an array of strings and returns an array of the strings reversed (the strings are in the same order, each string is reversed)
// Example: reverseStringArray(["something", "computer", "remainder", "monitor"]) -> ["gnihtemos", "retupmoc", "redniamer", "rotinom"]

function strings(strings) {
    let lastIndex = strings.length - 1;
    let reverseString = "";
    let array = []
    while (lastIndex >= 0) {
        reverseString = reverseString + strings[lastIndex]
        lastIndex--;
        array.push(reverseString)
    }
}
