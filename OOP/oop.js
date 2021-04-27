class Enemy {
    healthPoints = 50;
    speed = 10;
    damage = 10;

    attackObjective(objective) {
        objective.healthPoints -= this.damage;
    }
}

class StrongEnemy extends Enemy {
    healthPoints = 100;
    speed = 5;
    damage = 20;

    attackObjective(objective) {
        objective.healthPoints -= this.damage * 2;
    }
}

class Healer extends Enemy {
    speed = 5;
    damage = 10;

    attackObjective(objective) {
        console.log(super.healthPoints);
    }
}


const enemy = new Healer();

const objective = {healthPoints: 30};
enemy.attackObjective(objective);

console.log(objective, enemy.healthPoints);


class PowerUp {
    applyPowerUp(objective) {

    }
}

class SpeedPowerUp extends PowerUp {
    applyPowerUp(objective) {
        objective.speed *= 2;
    }
}

class HealthPowerUp extends PowerUp {
    applyPowerUp(objective) {
        objective.healthPoints *= 1.5;
    }
}

class IncreaseDamagePowerUp extends PowerUp {
    applyPowerUp(objective: Enemy) {
        objective.damage *= 4;
    }
}

const player = new Healer();
const speedPowerUp = new IncreaseDamagePowerUp();
speedPowerUp.applyPowerUp(player);
console.log(player);


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