"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CinemaBooth = void 0;
var Person_1 = require("./Person");
var CinemaBooth = /** @class */ (function () {
    function CinemaBooth() {
        this._personQueue = new PersonQueue();
        this._ticketProcessTime = 2;
        this._currentTime = 0;
        this._onPersonWithTicket = function () { return null; };
        this._onPersonLeftWithoutTicket = function () { return null; };
    }
    CinemaBooth.prototype.timeTick = function () {
        var _this = this;
        this._personQueue.incrementTime();
        var leavePeople = this._personQueue.removePeople();
        leavePeople.forEach(function (x) { return _this._onPersonLeftWithoutTicket(x); });
        this._currentTime++;
        if (this._currentTime >= this._ticketProcessTime) {
            this._currentTime = 0;
            var ticketPerson = this._personQueue.dequeue();
            if (ticketPerson) {
                this._onPersonWithTicket(ticketPerson);
            }
        }
    };
    CinemaBooth.prototype.addPersonWaiting = function (person) {
        this._personQueue.enqueue(person); // personQueue => [Manuel]
    };
    CinemaBooth.prototype.personLeftWithoutTicket = function (fn) {
        this._onPersonLeftWithoutTicket = fn;
    };
    CinemaBooth.prototype.personWithTicket = function (fn) {
        this._onPersonWithTicket = fn; // person => { console.log(`${person.name} left with a ticket!`); }
    };
    return CinemaBooth;
}());
exports.CinemaBooth = CinemaBooth;
var PersonQueue = /** @class */ (function () {
    function PersonQueue() {
        this._array = [];
    }
    PersonQueue.prototype.enqueue = function (person) {
        this._array.push(person);
    };
    PersonQueue.prototype.dequeue = function () {
        return this._array.shift();
    };
    PersonQueue.prototype.incrementTime = function () {
        this._array.forEach(function (e) { return e.incrementWaitingTime(); });
    };
    PersonQueue.prototype.removePeople = function () {
        var leavingPeople = [];
        this._array = this._array.filter(function (person, index) {
            if (index == 0) {
                return true;
            }
            if (!person.shouldLeave()) {
                return true;
            }
            leavingPeople.push(person);
            return false;
        });
        return leavingPeople;
    };
    return PersonQueue;
}());
var manuel = new Person_1.Person('Manuel', 1);
var juana = new Person_1.Person('Juana', 2);
var sergio = new Person_1.Person('Sergio', 5);
var luismi = new Person_1.Person('Luismi', 8);
var joselito = new Person_1.Person('Joselito', 50);
var Paco = new Person_1.Person('Paco', 0);
var cinemaBooth = new CinemaBooth();
cinemaBooth.addPersonWaiting(manuel);
cinemaBooth.addPersonWaiting(juana);
cinemaBooth.personWithTicket(function (person) {
    console.log(person.name + " left with a ticket!");
});
cinemaBooth.personLeftWithoutTicket(function (person) {
    console.log(person.name + " left WITHOUT a ticket!");
});
cinemaBooth.timeTick(); // "Juana left WITHOUT a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(luismi);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(sergio);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(Paco);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(joselito);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
