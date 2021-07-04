"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinePosition = exports.MinePositionCollection = void 0;
var MinePositionCollection = /** @class */ (function () {
    function MinePositionCollection() {
        this.positions = new Map();
    }
    MinePositionCollection.prototype.addPosition = function (minePosition) {
        var key = this.computeKey(minePosition.row, minePosition.column);
        this.positions.set(key, minePosition);
    };
    MinePositionCollection.prototype.computeKey = function (row, column) {
        return row + "," + column;
    };
    MinePositionCollection.prototype.hasMine = function (column, row) {
        return Boolean(this.positions.get(this.computeKey(row, column)));
    };
    MinePositionCollection.prototype.nearbyMines = function (column, row) {
        var _this = this;
        var foundMines = 0;
        var combinations = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        combinations.forEach(function (com) {
            var rowIndex = row + com[0];
            var columnIndex = column + com[1];
            if (_this.hasMine(columnIndex, rowIndex)) {
                foundMines++;
            }
        });
        return foundMines;
    };
    return MinePositionCollection;
}());
exports.MinePositionCollection = MinePositionCollection;
var MinePosition = /** @class */ (function () {
    function MinePosition(row, column) {
        this.column = column;
        this.row = row;
    }
    return MinePosition;
}());
exports.MinePosition = MinePosition;
