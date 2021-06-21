"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_name, _waitingCapacity) {
        this._name = _name;
        this._waitingCapacity = _waitingCapacity;
        this._waitingTime = 0;
    }
    Object.defineProperty(Person.prototype, "waitingTime", {
        get: function () {
            return this._waitingTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "waitingCapacity", {
        get: function () {
            return this._waitingCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.incrementWaitingTime = function () {
        this._waitingTime++;
    };
    Person.prototype.shouldLeave = function () {
        return this._waitingTime >= this._waitingCapacity;
    };
    return Person;
}());
exports.Person = Person;
