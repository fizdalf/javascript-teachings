// Using the image in /resources/superHeroNames.png, create a function that receives your first name and last name and returns your super hero name
// Example: getMySuperHeroName("Xavi","Gonzalez") -> "The Flying Brain"


function getMySuperHeroName(firstName, lastName) {

    const [firstCharacterName] = firstName;
    const [firstCharacterSurname] = lastName;
/// MAP
    const lettersObject = {
        "a": {name: "Captain", lastName: "Gem"},
        "b": {name: "Super", lastName: "Hornet"},
        "c": {name: "Doctor", lastName: "Wolf"},
    };


    return lettersObject[firstCharacterName].name + " " + lettersObject[firstCharacterSurname].lastName
}


const test = "hola";

const [, , test2] = test;

const myObject = {
    name: 'Juan',
    lastName: 'sanchez',
    points: 1,
    animals: ["dog", "cat", "fishes"],
    games: {
        "The Witcher 2": {
            finished: true,
            pirated: false
        },
        "Eye of the beholder": {
            finished: false,
            pirated: true
        }
    },
    isDead: false,
    kill: function () {
        this.isDead = true;
    }
}

const {name, lastName, games, kill, points} = myObject;

console.log(games["Eye of the beholder"], name);
