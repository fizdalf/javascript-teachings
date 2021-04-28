// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const terminal = process.argv
let index = 2
const lastIndex = terminal.length - 1
const numberOfChildrens = parseInt(terminal[index])
const partnersName = terminal[index + 1]
const geographicLocation = terminal[index + 2]
const jobTitle = terminal[lastIndex]

function tellFortune(numberOfChildrens, partnersName, geographicLocation, jobTitle) {
    console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildrens + " childrens.");
}

const childrenOptions = [1, 3, 5, 50, -5, 7];
const partnersOptions = [
    "Juan",
    "Gumercinda",
    "Mamerto",
    "Petunia",
]
const geographicLocationOptions = [
    "Marruecos",
    "Libia",
    "Órzola",
    "Argentina",
];
const jobTitleOptions = [
    "Fregasuelos",
    "Cirujana Anal",
    "Camarero",
    "Psicólogo",
];

const childrenRandom = Math.floor(Math.random() * (childrenOptions.length - 1));
const partnersRandom = Math.floor(Math.random() * (partnersOptions.length - 1));
const geographicLocationRandom = Math.floor(Math.random() * (geographicLocationOptions.length - 1));
const jobTitleRandom = Math.floor(Math.random() * (jobTitleOptions.length - 1));


tellFortune(childrenOptions[childrenRandom], partnersOptions[partnersRandom], geographicLocationOptions[geographicLocationRandom], jobTitleOptions[jobTitleRandom]);
