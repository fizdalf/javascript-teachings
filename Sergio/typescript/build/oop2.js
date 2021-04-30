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
var livingBeings = /** @class */ (function () {
    function livingBeings() {
    }
    livingBeings.prototype.reproduction = function () {
    };
    return livingBeings;
}());
var birds = /** @class */ (function (_super) {
    __extends(birds, _super);
    function birds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    birds.prototype.reproduction = function () {
        console.log("!! a mi mujer le salen huevos del culo AYUDA");
    };
    return birds;
}(livingBeings));
var primate = /** @class */ (function (_super) {
    __extends(primate, _super);
    function primate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    primate.prototype.peelBananas = function () {
        console.log("los platanos de canarias son los mejores, quieres que te enseñe a pelarlos?");
    };
    primate.prototype.reproduction = function () {
        console.log("unga unga unga soy un mono y hago lo mismo que un mamifero");
    };
    return primate;
}(livingBeings));
var mammal = /** @class */ (function (_super) {
    __extends(mammal, _super);
    function mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mammal.prototype.reproduction = function () {
        console.log("mete saca y sale un yo pero amorfo y pequeño");
    };
    return mammal;
}(livingBeings));
var human = /** @class */ (function (_super) {
    __extends(human, _super);
    function human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    human.prototype.playVideoGames = function () {
        console.log("siiii!! esto es mejor que pelar platanos");
    };
    human.prototype.reproduction = function () {
        console.log("hola aunque parezco un primate soy un mamifero y tambien hago el metesaca (bueno yo no :c nadie me quiere)");
    };
    return human;
}(mammal));
