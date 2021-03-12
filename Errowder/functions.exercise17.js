// Using the image in /resources/superHeroNames.png, create a function that receives your first name and last name and returns your super hero name
// Example: getMySuperHeroName("Xavi","Gonzalez") -> "The Flying Brain"

function getMySuperHeroName(name, surName) {

    let firstCharacter = name[0]
    let firstSurNameCharacter = surName[0]
    const characterA = a
    const characterB = b
    const characterC = c
    const characterD = d

    const surNameCharacterA = a
    const surNameCharacterB = b
    const surNameCharacterC = c
    const surNameCharacterD = d

    let heroName = ""
    let heroSurName= ""

    if (firstCharacter === characterA){
        heroName = "Captain "
    } else if (firstCharacter === characterB){
        heroName = "Super "
    } else if (firstCharacter === characterC){
        heroName = "Doctor "
    } else if (firstCharacter === characterD){
        heroName = "The phantom "
    }

    if (firstSurNameCharacter === surNameCharacterA){
        heroSurName = "Gem"
    } else if (firstSurNameCharacter === surNameCharacterB){
        heroSurName = "Hornet"
    } else if (firstSurNameCharacter === surNameCharacterC){
        heroSurName = "Wolf"
    } else if (firstSurNameCharacter === surNameCharacterD){
        heroSurName = "Storm"
    }

    return heroName + heroSurName
}

console.log(getMySuperHeroName(alvaro, amores))