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
var clothing = /** @class */ (function () {
    function clothing() {
    }
    clothing.prototype.colors = function () {
        console.log('todos los colores que quieras');
    };
    return clothing;
}());
var shirt = /** @class */ (function (_super) {
    __extends(shirt, _super);
    function shirt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    shirt.prototype.colors = function () {
        console.log('todos los que te puedas imaginar menos el dorado (es imposible hacer ese color con tinte)');
    };
    return shirt;
}(clothing));
var pants = /** @class */ (function (_super) {
    __extends(pants, _super);
    function pants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pants.prototype.colors = function () {
        console.log('solo marron, negro y azul marino al menos que quieras parecer un payaso');
    };
    return pants;
}(clothing));
var shorts = /** @class */ (function (_super) {
    __extends(shorts, _super);
    function shorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    shorts.prototype.colors = function () {
        console.log('lo mismo que la camiseta usame de bañador si quieres ;3');
    };
    return shorts;
}(clothing));
