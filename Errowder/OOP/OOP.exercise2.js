//Create a class

class burger {
    ingredientes = "lechuga, tomate, huevo"
    salsa = "mayonesa"
    carne = "cerdo"
}

class carnivorous extends burger {
    ingredientes = "bacon, huevo"
    salsa = "ketchup"
    carne = "doble cerdo"
}

class vegetarian extends burger {
    ingredientes = "lechuga"
}

class addExtra {
    applyExtra(objetivo){

    }
}

class nuggets extends addExtra {
    applyExtra(objetivo){
        objetivo.extras += "nuggets"
    }
}

class onionRings extends addExtra {
    applyExtra(objetivo){
        objetivo.extras += "onionRings"
    }
}


class addDrink {
    applyDrink(objetive){

    }
}

class cola extends addDrink {
    applyDrink(objetive) {
        objetive.drink += "cola"
    }
}

class waterForVegetarians extends addDrink {
    applyDrink(objetive) {
        objetive.drink += "water"
    }
}

const chosenBurger = new vegetarian
const chosenExtra = new onionRings
const chosenDrink = new waterForVegetarians
chosenExtra.applyExtra(chosenBurger)
chosenDrink.applyDrink(chosenBurger)
console.log(chosenBurger)