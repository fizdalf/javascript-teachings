class puzzle {
    numberOfPieces = 1000;
    long = 70;
    wide = 50;
    shape = 'rectangle';
    ageRecommendation = 15 - 99;

    determineAgeRecommendation(numberOfPieces) {
        if (this.numberOfPieces > 0 && this.numberOfPieces < 20) {
            this.ageRecommendation = 6 - 10
        } else if (this.numberOfPieces > 20 && this.numberOfPieces < 100) {
            this.ageRecommendation = 10 - 15;
        } else if (this.numberOfPieces > 100 && this.numberOfPieces < 500) {
            this.ageRecommendation = 15 - 18
        } else if (this.numberOfPieces > 500 && this.numberOfPieces < 5000) {
            this.ageRecommendation = 18 - 99
        }
    }

    class
    StrongEnemy
    extends
    Enemy {
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
    applyPowerUp(objective) {
        objective.damage *= 4;
    }
}

const player = new Healer();
const speedPowerUp = new IncreaseDamagePowerUp();
speedPowerUp.applyPowerUp(player);
console.log(player);
