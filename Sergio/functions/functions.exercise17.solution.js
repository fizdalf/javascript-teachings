// Using the image in /resources/superHeroNames.png, create a function that receives your first name and last name and returns your super hero name
// Example: getMySuperHeroName("Xavi","Gonzalez") -> "The Flying Brain"

function getMySuperHeroName(firstName, lastName) {
    const picture = require("./resources/superHeroNames.png")
    return firstName + lastName
}

console.log(getMySuperHeroName("Xavi","Gonzalez"))
