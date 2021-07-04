"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineRandomizer = void 0;
var MinePositions_1 = require("./MinePositions");
var MineRandomizer = /** @class */ (function () {
    function MineRandomizer() {
    }
    MineRandomizer.getRandomMinePositions = function (mines, size) {
        var positions = new MinePositions_1.MinePositionCollection();
        for (var i = 0; i < mines; i++) {
            var minePosition = MineRandomizer.getRandomMinePosition(size);
            while (positions.hasMine(minePosition.column, minePosition.row)) {
                minePosition = MineRandomizer.getRandomMinePosition(size);
            }
            positions.addPosition(minePosition);
        }
        return positions;
    };
    MineRandomizer.prototype.getMinePositions = function (minesCount, gridSize) {
        return MineRandomizer.getRandomMinePositions(minesCount, gridSize);
    };
    MineRandomizer.getRandomMinePosition = function (size) {
        var column = Math.floor(Math.random() * size);
        var row = Math.floor(Math.random() * size);
        return new MinePositions_1.MinePosition(row, column);
    };
    return MineRandomizer;
}());
exports.MineRandomizer = MineRandomizer;
