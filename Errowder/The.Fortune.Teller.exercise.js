// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const terminal = process.argv
let index = 2
const lastIndex = terminal.length -1
const numberOfChildrens = parseInt(terminal[index])
const partnersName = terminal[index +1]
const geographicLocation = terminal[index +2]
const jobTitle = terminal[lastIndex]

function tellFortune() {
    let finalSentence = "You will be a " + jobTitle + " in "+ geographicLocation + " , and married to " + partnersName + " with " + numberOfChildrens + " ."
    return tellFortune()
}

console.log(tellfortune())