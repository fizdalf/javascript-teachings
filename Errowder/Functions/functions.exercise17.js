// Using the image in /resources/superHeroNames.png, create a function that receives your first name and last name and returns your super hero name
// Example: getMySuperHeroName("Xavi","Gonzalez") -> "The Flying Brain"

const arrayOfLetters = [
    [
        "a", "Captain ", "Gem"
    ],
    [
        "b", "Super ", "Hornet"
    ],
    [
        "c", "Doctor ", "Wolf"
    ],
];

function getMySuperHeroName(name, surName) {

    let firstCharacter = name[0]
    let firstSurNameCharacter = surName[0]

    let heroName = ""
    let heroSurName = ""

    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (firstCharacter === arrayOfLetters[i][0]) {
            heroName = arrayOfLetters[i][1];
        }
        if (firstSurNameCharacter === arrayOfLetters[i][0]) {
            heroSurName = arrayOfLetters[i][2];
        }
    }
    return heroName + heroSurName
}

console.log(getMySuperHeroName("alvaro", "amores"))
