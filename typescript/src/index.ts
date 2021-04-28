class Enemy {
    private healthPoints = 50;
    protected speed = 10;
    protected damage = 10;
    protected isDead = false;

    attackObjective(objective: Enemy) {
        objective.takeDamage(this.damage)
    }

    getHealthPoints() {
        return this.healthPoints;
    }

    takeDamage(damageToTake: number) {
        this.healthPoints -= damageToTake;
        if (this.healthPoints <= 0) {
            this.healthPoints = 0;
            this.isDead = true;
        }
    }

    modifySpeed(newSpeed: number) {
        this.speed = newSpeed;
    }

    getSpeed() {
        return this.speed;
    }

    modifyHealthPoints(number: number) {
        this.healthPoints = number;
    }

    modifyDamage(number: number) {
        this.damage = number;
    }

    getDamage() {
        return this.damage;
    }

    healHealthPoints(healingDone: number) {
        if (this.isDead) {
            throw new Error('You cannot heal what is dead!');
        }
        this.healthPoints += healingDone;
    }
}

class UndyingEnemy extends Enemy {
    takeDamage(damageToTake: number) {

    }
}

class StrongEnemy extends Enemy {
    speed = 5;
    damage = 20;

    attackObjective(objective: Enemy) {
        objective.takeDamage(this.damage * 2);
    }
}

class Healer extends Enemy {
    speed = 5;
    protected damage = 10;
    private healing = this.damage;

    attackObjective(objective: Enemy) {
        objective.healHealthPoints(this.healing);
    }
}


const enemy = new Healer();
enemy.takeDamage(10);
const objective = new Healer();
enemy.attackObjective(objective);

console.log(objective, enemy.getHealthPoints());


class PowerUp {
    applyPowerUp(objective: Enemy) {

    }
}

class SpeedPowerUp extends PowerUp {
    applyPowerUp(objective: Enemy) {
        objective.modifySpeed(objective.getSpeed() * 2);
    }
}

class HealthPowerUp extends PowerUp {
    applyPowerUp(objective: Enemy) {
        objective.modifyHealthPoints(objective.getHealthPoints() * 1.5);
    }
}

class IncreaseDamagePowerUp extends PowerUp {
    applyPowerUp(objective: Enemy) {
        objective.modifyDamage(objective.getDamage() * 4)
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