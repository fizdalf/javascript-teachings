"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSweeper = void 0;
var MinesGridCreator_1 = require("./MinesGridCreator");
var MineSweeper = /** @class */ (function () {
    function MineSweeper(minePositionGenerator, mineCount, gridSize) {
        this.isGameFinished = false;
        this.isGameWon = false;
        this.isGameLost = false;
        this.size = gridSize;
        this.minePositionCollection = minePositionGenerator.getMinePositions(mineCount, gridSize);
        var mineGenerator = new MinesGridCreator_1.MineGridCreator(this.minePositionCollection, this.size);
        this.grid = mineGenerator.getGrid();
    }
    MineSweeper.prototype.openSlot = function (row, column) {
        if (this.isOutOfBounds(row, column)) {
            throw new Error('Position out of bounds');
        }
        var isMine = this.revealNext(row, column);
        if (isMine) {
            this.revealMinesPositions();
            this.revealWrongFlags();
        }
        return isMine;
    };
    MineSweeper.prototype.isOutOfBounds = function (row, column) {
        return row < 0 || row >= this.size || column < 0 || column >= this.size;
    };
    MineSweeper.prototype.revealNext = function (row, column) {
        var _this = this;
        if (this.isOutOfBounds(row, column)) {
            return false;
        }
        var slot = this.getSlotInPosition(row, column);
        if (slot.isRevealed()) {
            return false;
        }
        slot.reveal();
        if (slot.isMine()) {
            return true;
        }
        if (slot.getContent() === "0") {
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
            combinations.forEach(function (combination) {
                _this.revealNext(row + combination[0], column + combination[1]);
            });
        }
        return false;
    };
    MineSweeper.prototype.revealMinesPositions = function () {
        var _this = this;
        this.minePositionCollection.positions.forEach(function (minePosition) {
            var slot = _this.getSlotInPosition(minePosition.row, minePosition.column);
            slot.reveal();
        });
    };
    MineSweeper.prototype.getSlotInPosition = function (row, column) {
        return this.grid[row][column];
    };
    MineSweeper.prototype.getBoard = function () {
        var newGrid = [];
        this.grid.forEach(function (x) {
            var newRow = [];
            x.forEach(function (slot) {
                newRow.push(slot.getContent());
            });
            newGrid.push(newRow);
        });
        return newGrid;
    };
    MineSweeper.prototype.revealWrongFlags = function () {
        this.grid.forEach(function (row) {
            row.forEach(function (slot) {
                if (slot.isFlag() && !slot.isMine()) {
                    slot.reveal();
                }
            });
        });
    };
    MineSweeper.prototype.toggleFlag = function (row, column) {
        var slot = this.getSlotInPosition(row, column);
        if (slot.isFlag()) {
            slot.unmarkFlag();
            return;
        }
        slot.markWithFlag();
    };
    return MineSweeper;
}());
exports.MineSweeper = MineSweeper;
