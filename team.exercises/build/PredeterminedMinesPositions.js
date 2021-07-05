"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredeterminedMinesPositions = void 0;
var MinePositions_1 = require("./MinePositions");
var PredeterminedMinesPositions = /** @class */ (function () {
    function PredeterminedMinesPositions(positions) {
        var _this = this;
        this.minePositions = new MinePositions_1.MinePositionCollection();
        positions.forEach(function (x) { return _this.minePositions.addPosition(x); });
    }
    PredeterminedMinesPositions.prototype.getMinePositions = function (minesCount, gridSize) {
        return this.minePositions;
    };
    return PredeterminedMinesPositions;
}());
exports.PredeterminedMinesPositions = PredeterminedMinesPositions;
