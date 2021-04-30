"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enemy = /** @class */ (function () {
    function Enemy() {
        this.healthPoints = 50;
        this.speed = 10;
        this.damage = 10;
        this.isDead = false;
    }
    Enemy.prototype.attackObjective = function (objective) {
        objective.takeDamage(this.damage);
    };
    Enemy.prototype.getHealthPoints = function () {
        return this.healthPoints;
    };
    Enemy.prototype.takeDamage = function (damageToTake) {
        this.healthPoints -= damageToTake;
        if (this.healthPoints <= 0) {
            this.healthPoints = 0;
            this.isDead = true;
        }
    };
    Enemy.prototype.modifySpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    Enemy.prototype.getSpeed = function () {
        return this.speed;
    };
    Enemy.prototype.modifyHealthPoints = function (number) {
        this.healthPoints = number;
    };
    Enemy.prototype.modifyDamage = function (number) {
        this.damage = number;
    };
    Enemy.prototype.getDamage = function () {
        return this.damage;
    };
    Enemy.prototype.healHealthPoints = function (healingDone) {
        if (this.isDead) {
            throw new Error('You cannot heal what is dead!');
        }
        this.healthPoints += healingDone;
    };
    return Enemy;
}());
var UndyingEnemy = /** @class */ (function (_super) {
    __extends(UndyingEnemy, _super);
    function UndyingEnemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndyingEnemy.prototype.takeDamage = function (damageToTake) {
    };
    return UndyingEnemy;
}(Enemy));
var StrongEnemy = /** @class */ (function (_super) {
    __extends(StrongEnemy, _super);
    function StrongEnemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.damage = 20;
        return _this;
    }
    StrongEnemy.prototype.attackObjective = function (objective) {
        objective.takeDamage(this.damage * 2);
    };
    return StrongEnemy;
}(Enemy));
var Healer = /** @class */ (function (_super) {
    __extends(Healer, _super);
    function Healer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.damage = 10;
        _this.healing = _this.damage;
        return _this;
    }
    Healer.prototype.attackObjective = function (objective) {
        objective.healHealthPoints(this.healing);
    };
    return Healer;
}(Enemy));
var enemy = new Healer();
enemy.takeDamage(10);
var objective = new Healer();
enemy.attackObjective(objective);
console.log(objective, enemy.getHealthPoints());
var PowerUp = /** @class */ (function () {
    function PowerUp() {
    }
    PowerUp.prototype.applyPowerUp = function (objective) {
    };
    return PowerUp;
}());
var SpeedPowerUp = /** @class */ (function (_super) {
    __extends(SpeedPowerUp, _super);
    function SpeedPowerUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeedPowerUp.prototype.applyPowerUp = function (objective) {
        objective.modifySpeed(objective.getSpeed() * 2);
    };
    return SpeedPowerUp;
}(PowerUp));
var HealthPowerUp = /** @class */ (function (_super) {
    __extends(HealthPowerUp, _super);
    function HealthPowerUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HealthPowerUp.prototype.applyPowerUp = function (objective) {
        objective.modifyHealthPoints(objective.getHealthPoints() * 1.5);
    };
    return HealthPowerUp;
}(PowerUp));
var IncreaseDamagePowerUp = /** @class */ (function (_super) {
    __extends(IncreaseDamagePowerUp, _super);
    function IncreaseDamagePowerUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IncreaseDamagePowerUp.prototype.applyPowerUp = function (objective) {
        objective.modifyDamage(objective.getDamage() * 4);
    };
    return IncreaseDamagePowerUp;
}(PowerUp));
var player = new Healer();
var speedPowerUp = new IncreaseDamagePowerUp();
speedPowerUp.applyPowerUp(player);
console.log(player);
var Animal = /** @class */ (function () {
    function Animal() {
        this.isAlive = true;
    }
    Animal.prototype.makeSound = function () {
    };
    Animal.prototype.shredYourFaceToPiecesWithTheirPaws = function () {
        throw Error("ONLY SUBCLASSES OF ANIMAL CAN USE THIS!");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.shredYourFaceToPiecesWithTheirPaws = function () {
        console.log('Your face looks like spaghetti!');
    };
    Cat.prototype.makeSound = function () {
        console.log('Miau');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isBetterThanAFuckingCat = true;
        return _this;
    }
    Dog.prototype.shredYourFaceToPiecesWithTheirPaws = function () {
        console.error('I\'m not a fucking cat!');
    };
    Dog.prototype.makeSound = function () {
        console.log('Guau');
    };
    Dog.prototype.barf = function () {
        this.makeSound();
    };
    return Dog;
}(Animal));
var MuteDog = /** @class */ (function (_super) {
    __extends(MuteDog, _super);
    function MuteDog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isBetterThanAFuckingCat = false;
        return _this;
    }
    MuteDog.prototype.makeSound = function () {
        console.log('');
    };
    return MuteDog;
}(Dog));
