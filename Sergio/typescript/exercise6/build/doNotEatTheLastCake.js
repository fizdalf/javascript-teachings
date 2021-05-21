"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.firstmove = function (cakes) {
        return cakes > 2;
    };
    Player.prototype.move = function (cakes, last) {
        if (cakes % 4 < 2) {
            return 3;
        }
        return 1;
    };
    return Player;
}());
exports.Player = Player;
