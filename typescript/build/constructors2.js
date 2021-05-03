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
var Finder = /** @class */ (function () {
    function Finder() {
    }
    Finder.prototype.getBrand = function () {
        return this.brand;
    };
    return Finder;
}());
var Mobile = /** @class */ (function () {
    function Mobile(brand) {
        this.brand = brand;
        this.batteryPower = 500;
        this.screen = true;
        Mobile.count++;
    }
    // public static createMobile(brandFinder: Finder) {
    //     const brand = brandFinder.getBrand();
    //     if (brand == "iPhone") {
    //         throw new Error('No quiero esa mierda');
    //     }
    //     return new Mobile(brand);
    // }
    //
    // public static createMobileWithBrand(brand: string){
    //     if (brand == "iPhone") {
    //         throw new Error('No quiero esa mierda');
    //     }
    //     return new Mobile(brand);
    // }
    Mobile.prototype.reduceBatteryPower = function (amount) {
        this.batteryPower -= amount;
    };
    Mobile.prototype.hasScreen = function () {
        return this.screen;
    };
    Mobile.prototype.capitalizeBrand = function (brand) {
        return brand;
    };
    Mobile.prototype.getBrand = function () {
        return this.brand;
    };
    Mobile.getCount = function () {
        return Mobile.count;
    };
    Mobile.count = 0;
    return Mobile;
}());
var SamsungMobile = /** @class */ (function (_super) {
    __extends(SamsungMobile, _super);
    function SamsungMobile(brand) {
        if (brand === void 0) { brand = "Samsung"; }
        return _super.call(this, brand) || this;
    }
    return SamsungMobile;
}(Mobile));
// const samsung = new Mobile('Samsung');
// const pepe = new Mobile('Samsung');
// const juan = new Mobile('Samsung');
// const pepito = new Mobile('Samsung');
// const huawei = new Mobile('Huawei');
var myIPhoneDeSamsung = new SamsungMobile('Apple la manzanita de mierda');
console.log(myIPhoneDeSamsung.brand);
// const myNewSamsung = new SamsungMobile();
Mobile.count = 30;
console.log(Mobile.getCount());
// class Utils {
//     private pepe: number = 4;
//     numberToString(number: number) {
//         return number.toString(10);
//     }
// }
var BetterUtils = /** @class */ (function () {
    function BetterUtils() {
    }
    BetterUtils.numberToString = function (number) {
        return number.toString(10);
    };
    return BetterUtils;
}());
BetterUtils.numberToString(5);
