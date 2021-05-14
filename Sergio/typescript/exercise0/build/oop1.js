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
var electronicDevices = /** @class */ (function () {
    function electronicDevices() {
    }
    electronicDevices.prototype.playsSound = function () {
        console.log("depende del aparato electrónico tendrá un sonido u otro");
    };
    return electronicDevices;
}());
var radio = /** @class */ (function (_super) {
    __extends(radio, _super);
    function radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    radio.prototype.playsSound = function () {
        console.log("los cuarentaaaa");
    };
    return radio;
}(electronicDevices));
var phone = /** @class */ (function (_super) {
    __extends(phone, _super);
    function phone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    phone.prototype.playsSound = function () {
        console.log("Laura está a 5 km de ti");
    };
    phone.prototype.callOfYourMom = function (answer) {
        if (!answer) {
            throw Error("como le cuelgas a tu madre?? te la vas a cargar !!");
        }
        else {
            console.log("Quien narices es laura y porque vino a verte?");
        }
    };
    return phone;
}(electronicDevices));
var computer = /** @class */ (function (_super) {
    __extends(computer, _super);
    function computer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    computer.prototype.playsSound = function () {
        console.log("!!PIM PIM PIM, SE HA DETECTADO UNA AMENAZA");
    };
    computer.prototype.editText = function (edit) {
        var savedText = "texto por defecto";
        return savedText + edit;
    };
    return computer;
}(electronicDevices));
var gamerComputer = /** @class */ (function (_super) {
    __extends(gamerComputer, _super);
    function gamerComputer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    gamerComputer.prototype.playsSound = function () {
        console.log("*sondios de disparos en gta*");
    };
    gamerComputer.prototype.playGames = function () {
        console.log("primero estuda y despues juega cerdo!!");
    };
    return gamerComputer;
}(computer));
