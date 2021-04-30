class Animal {
    isAlive = true;

    makeSound() {

    }

    shredYourFaceToPiecesWithTheirPaws() {
        throw Error("ONLY SUBCLASSES OF ANIMAL CAN USE THIS!");
    }
}

class Cat extends Animal {
    shredYourFaceToPiecesWithTheirPaws() {
        console.log('Your face looks like spaghetti!');
    }

    makeSound() {
        console.log('Miau');
    }
}

class Dog extends Animal {
    isBetterThanAFuckingCat = true;

    shredYourFaceToPiecesWithTheirPaws() {
        console.error('I\'m not a fucking cat!');
    }

    makeSound() {
        console.log('Guau');
    }

    barf() {
        this.makeSound();
    }
}

class MuteDog extends Dog {
    isBetterThanAFuckingCat = false;

    makeSound() {
        console.log('');
    }

}
