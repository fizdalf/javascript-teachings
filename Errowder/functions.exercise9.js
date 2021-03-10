// Huh, the boss went to finance and he didn't like that much to give you a raise!, so he wants to make it hard for you
// to get it!
// create a function "earnYourRaise" which receives the first name and last name of an employee, the base salary, the years
// they've been working for the company
// this function returns the firstName and lastName spelled backwards with a hyphen in the middle, and the raise they deserve.
// As the boss it's out of control the function must generate a random value for the happiness level. (Math.random)
// Example earnYourRaise("xavi","gonzalez",2000,10) -> (random number was 0.5) "ivax - zelaznog: 1160"
// Call this function with 3 different set of arguments and show the results through the terminal
// You can uncomment the code below to import the functions you need from the other exercises
// const concatenateLibrary = require("./functions.exercise6");
// const reverseCharacters = require("./functions.exercise7");
// const calculateRaise = require("./functions.exercise8");

const concatenateLibrary = require("./functions.exercise6");
const reverseCharactersLibrary = require("./functions.exercise7");
const calculateRaiseLibrary = require("./functions.exercise8");

function earnYourRaise(firstName, lastName, baseSalary, yearsWorkingCompany) {
    const completeNames = concatenateLibrary.concatenate(lastName, firstName);
    const partialResult = reverseCharactersLibrary.reverseCharacters(completeNames);
    const happinessOfTheBossLevel = Math.random();
    const result = calculateRaiseLibrary.calculateRaise(baseSalary, yearsWorkingCompany, happinessOfTheBossLevel)
    return partialResult + ": " + result;
}

console.log(earnYourRaise("xavi", "gonzalez", 2000, 10));