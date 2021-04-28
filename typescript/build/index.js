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
    }
    Enemy.prototype.attackObjective = function (objective) {
        objective.healthPoints -= this.damage;
    };
    return Enemy;
}());
var StrongEnemy = /** @class */ (function (_super) {
    __extends(StrongEnemy, _super);
    function StrongEnemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healthPoints = 100;
        _this.speed = 5;
        _this.damage = 20;
        return _this;
    }
    StrongEnemy.prototype.attackObjective = function (objective) {
        objective.healthPoints -= this.damage * 2;
    };
    return StrongEnemy;
}(Enemy));
var Healer = /** @class */ (function (_super) {
    __extends(Healer, _super);
    function Healer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.damage = 10;
        return _this;
    }
    Healer.prototype.attackObjective = function (objective) {
        console.log(_super.prototype.healthPoints);
    };
    return Healer;
}(Enemy));
var enemy = new Healer();
var objective = { healthPoints: 30 };
enemy.attackObjective(objective);
console.log(objective, enemy.healthPoints);
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
        objective.speed *= 2;
    };
    return SpeedPowerUp;
}(PowerUp));
var HealthPowerUp = /** @class */ (function (_super) {
    __extends(HealthPowerUp, _super);
    function HealthPowerUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HealthPowerUp.prototype.applyPowerUp = function (objective) {
        objective.healthPoints *= 1.5;
    };
    return HealthPowerUp;
}(PowerUp));
var IncreaseDamagePowerUp = /** @class */ (function (_super) {
    __extends(IncreaseDamagePowerUp, _super);
    function IncreaseDamagePowerUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IncreaseDamagePowerUp.prototype.applyPowerUp = function (objective) {
        objective.damage *= 4;
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
