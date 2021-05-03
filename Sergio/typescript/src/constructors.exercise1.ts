class Enemy {
    health = 500
    power = 200;
    spawned = false;

    constructor(health = 50, power = 20) {
        this.health = health
        this.power = power
    }

    startBattle() {
        this.spawned = true;
    }

    stopBattle() {
        this.spawned = false;
    }
}

class MegaEnemy extends Enemy {
    health = 1000;
    power = 1000;

    constructor(health = 500, power = 200) {
        super(health, power)
    }

    UltraAttack() {
        console.log('MUEREEEEEE!!!');
    }
}

class InoffensiveEnemy extends Enemy {
    health = 1;
    power = 0
    constructor(health = 5, power = 2) {
        super(health, power)
    }


}

class Match {
    private firstEnemy: Enemy = new MegaEnemy();
    private secondEnemy: Enemy = new InoffensiveEnemy();
    private speed: number = 0;

    private constructor(enemy?: Enemy) {
        if (enemy) {
            this.firstEnemy = enemy;
        }
    }

    private static instance: Match;

    public static theFinalMatch() {
        if (!this.instance) {
            console.log('Empezando partida');
            this.instance = new Match();
        }
        return this.instance;
    }

    startMatch() {
        this.firstEnemy.startBattle();
        this.secondEnemy.startBattle();
        console.log('Comienza la batalla');
    }

    enemyPowerBonus() {
        this.firstEnemy.power += this.firstEnemy.power * 0.3;
    }

    speedBonus() {
        return this.speed;
    }
}

const finalMatch = Match.theFinalMatch();
finalMatch.enemyPowerBonus()
console.log(finalMatch.speedBonus())


