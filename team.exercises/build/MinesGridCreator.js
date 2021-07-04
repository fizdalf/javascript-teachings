"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineGridCreator = void 0;
var Slot_1 = require("./Slot");
var MineGridCreator = /** @class */ (function () {
    function MineGridCreator(minesPositions, gridSize) {
        this.grid = [];
        this._minesPositions = minesPositions;
        this._gridSize = gridSize;
    }
    MineGridCreator.prototype.getGrid = function () {
        for (var row = 0; row < this._gridSize; row++) {
            var rowArray = [];
            for (var column = 0; column < this._gridSize; column++) {
                var hasMine = this._minesPositions.hasMine(column, row);
                var minesNearby = this._minesPositions.nearbyMines(column, row);
                var slot = new Slot_1.Slot(hasMine, minesNearby);
                rowArray.push(slot);
            }
            this.grid.push(rowArray);
        }
        if (this._gridSize <= 0) {
            throw Error('I need the mines positions and the grid can not be 0 or less');
        }
        return this.grid;
    };
    return MineGridCreator;
}());
exports.MineGridCreator = MineGridCreator;
