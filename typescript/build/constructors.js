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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        console.log('calling constructor');
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    return Point;
}());
var LazyPoint = /** @class */ (function () {
    function LazyPoint() {
        this.x = 0;
        this.y = 0;
    }
    LazyPoint.prototype.getX = function () {
        return this.x;
    };
    return LazyPoint;
}());
var myPoint = new Point(10, 40);
myPoint = new Point(12, 40);
var yourPoint = new LazyPoint();
console.log(myPoint.getX(), yourPoint.getX());
var Engine = /** @class */ (function () {
    function Engine() {
        this.power = 100;
        this.started = false;
    }
    Engine.prototype.startEngine = function () {
        this.started = true;
    };
    Engine.prototype.stopEngine = function () {
        this.started = false;
    };
    return Engine;
}());
var ElectricEngine = /** @class */ (function (_super) {
    __extends(ElectricEngine, _super);
    function ElectricEngine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.power = 200;
        return _this;
    }
    ElectricEngine.prototype.electrocuteSergio = function () {
        console.log('bzzzzzz');
    };
    return ElectricEngine;
}(Engine));
var SlaveEngine = /** @class */ (function (_super) {
    __extends(SlaveEngine, _super);
    function SlaveEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SlaveEngine;
}(Engine));
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = new ElectricEngine();
        this.speed = 0;
        if (engine) {
            this.engine = engine;
        }
    }
    Car.theBestCar = function () {
        if (!this.instance) {
            console.log('llamando new car');
            this.instance = new Car(new SlaveEngine());
        }
        return this.instance;
    };
    Car.prototype.startCar = function () {
        this.engine.startEngine();
        console.log('enciende también la radio');
    };
    Car.prototype.accelerate = function () {
        this.speed += this.engine.power * 0.3;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
var test1 = {
    name: "manolo",
};
var test2 = test1;
var test3 = "hola";
var test4 = "hola";
console.log(test1 === test2, test3 === test4);
var myCars = [Car.theBestCar(), Car.theBestCar()];
console.log(myCars[0] === myCars[1]);
myCars[0].accelerate();
console.log(myCars[1].getSpeed());
