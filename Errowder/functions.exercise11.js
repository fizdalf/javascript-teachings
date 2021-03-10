// Create a function that receives an array of strings and returns an array of the strings reversed (the strings are in the same order, each string is reversed)
// Example: reverseStringArray(["something", "computer", "remainder", "monitor"]) -> ["gnihtemos", "retupmoc", "redniamer", "rotinom"]

function reverseStringArray(something, computer, remainer, monitor) {
    let reverseSomething = something.reverse();
    let reverseComputer = computer.reverse();
    let reverseRemainer = remainer.reverse();
    let reverseMonitor = monitor.reverse()
    return reverseSomething, reverseComputer, reverseRemainer, reverseMonitor
}
console.log(reverseStringArray());