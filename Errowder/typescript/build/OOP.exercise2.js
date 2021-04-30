"use strict";
//Create a class
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
var burger = /** @class */ (function () {
    function burger() {
        this.ingredientes = ["lechuga", "tomate", "huevo"];
        this.salsa = "mayonesa";
        this.carne = "cerdo";
        this.extras = "";
        this.drink = "";
    }
    return burger;
}());
var carnivorous = /** @class */ (function (_super) {
    __extends(carnivorous, _super);
    function carnivorous() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return carnivorous;
}(burger));
this.ingredientes.push("bacon");
salsa = "ketchup";
carne = "doble cerdo";
var vegetarian = /** @class */ (function (_super) {
    __extends(vegetarian, _super);
    function vegetarian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ingredientes = "lechuga";
        _this.salsa = "";
        _this.carne = "";
        return _this;
    }
    return vegetarian;
}(burger));
var addExtra = /** @class */ (function () {
    function addExtra() {
    }
    addExtra.prototype.applyExtra = function (objetivo) {
    };
    return addExtra;
}());
var nuggets = /** @class */ (function (_super) {
    __extends(nuggets, _super);
    function nuggets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    nuggets.prototype.applyExtra = function (objetivo) {
        objetivo.extras += "nuggets";
    };
    return nuggets;
}(addExtra));
var onionRings = /** @class */ (function (_super) {
    __extends(onionRings, _super);
    function onionRings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    onionRings.prototype.applyExtra = function (objetivo) {
        objetivo.extras += "onionRings";
    };
    return onionRings;
}(addExtra));
var addDrink = /** @class */ (function () {
    function addDrink() {
    }
    addDrink.prototype.applyDrink = function (objetivo) {
    };
    return addDrink;
}());
var cola = /** @class */ (function (_super) {
    __extends(cola, _super);
    function cola() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cola.prototype.applyDrink = function (objetivo) {
        objetivo.drink += "cola";
    };
    return cola;
}(addDrink));
var waterForVegetarians = /** @class */ (function (_super) {
    __extends(waterForVegetarians, _super);
    function waterForVegetarians() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    waterForVegetarians.prototype.applyDrink = function (objetivo) {
        objetivo.drink += "water";
    };
    return waterForVegetarians;
}(addDrink));
var chosenBurger = new vegetarian;
var chosenExtra = new onionRings;
var chosenDrink = new waterForVegetarians;
chosenExtra.applyExtra(chosenBurger);
chosenDrink.applyDrink(chosenBurger);
console.log(chosenBurger);
