"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuscaMinas_1 = require("../src/BuscaMinas");
var PredeterminedMinesPositions_1 = require("../src/PredeterminedMinesPositions");
var MinePositions_1 = require("../src/MinePositions");
var positions = [
    new MinePositions_1.MinePosition(7, 7),
    new MinePositions_1.MinePosition(4, 2),
    new MinePositions_1.MinePosition(5, 5),
    new MinePositions_1.MinePosition(5, 2),
    new MinePositions_1.MinePosition(4, 6),
    new MinePositions_1.MinePosition(1, 0),
    new MinePositions_1.MinePosition(2, 1),
    new MinePositions_1.MinePosition(7, 1),
];
describe('MineSweeper', function () {
    describe('OpenSlot', function () {
        it('should throw error if the position given is out of bounds', function () {
            var mineSweeper = new BuscaMinas_1.MineSweeper(new PredeterminedMinesPositions_1.PredeterminedMinesPositions(positions), 8, 8);
            expect(function () { return mineSweeper.openSlot(10, 10); }).toThrowError('Position out of bounds');
        });
        it('should return true if is a mine', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions([
                new MinePositions_1.MinePosition(4, 6),
                new MinePositions_1.MinePosition(2, 1),
            ]);
            minesPositions.getMinePositions(8, 8);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 8, 8);
            expect(mineSweeper.openSlot(4, 6)).toStrictEqual(true);
        });
        it('should return false if is revealed', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions(positions);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 8, 8);
            mineSweeper.openSlot(2, 2);
            expect(mineSweeper.openSlot(2, 2)).toStrictEqual(false);
        });
        it('should reveal adjacent Slot if not mine', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions([
                new MinePositions_1.MinePosition(0, 0),
            ]);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 1, 3);
            mineSweeper.openSlot(2, 1);
            var theBoard = mineSweeper.getBoard();
            expect(theBoard).toStrictEqual([
                ["", "1", "0"],
                ["1", "1", "0"],
                ["0", "0", "0"],
            ]);
        });
        it('should reveal all the slots that have FLAG but not mines if you happen to open a slot with a mine in it', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions([
                new MinePositions_1.MinePosition(1, 1),
                new MinePositions_1.MinePosition(0, 0),
            ]);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 2, 2);
            mineSweeper.toggleFlag(0, 1);
            mineSweeper.openSlot(1, 1);
            expect(mineSweeper.getBoard()).toStrictEqual([
                ["*", "#"],
                ["", "*"]
            ]);
        });
    });
    describe('toggleFlag', function () {
        it('should mark a slot with a flag', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions(positions);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 2, 2);
            mineSweeper.toggleFlag(0, 0);
            expect(mineSweeper.getBoard()).toStrictEqual([
                ["f", ""],
                ["", ""],
            ]);
        });
        it('should unmark a slot with a flag if already has one', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions(positions);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 2, 2);
            mineSweeper.toggleFlag(0, 0);
            mineSweeper.toggleFlag(0, 0);
            expect(mineSweeper.getBoard()).toStrictEqual([["", ""], ["", ""]]);
        });
    });
    describe('RevealMinesPositions', function () {
        it('should reveal the mines', function () {
            var minesPositions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions([
                new MinePositions_1.MinePosition(1, 1),
                new MinePositions_1.MinePosition(0, 0),
            ]);
            var mineSweeper = new BuscaMinas_1.MineSweeper(minesPositions, 2, 2);
            mineSweeper.openSlot(1, 1);
            expect(mineSweeper.getBoard()).toStrictEqual([
                ["*", ""],
                ["", "*"]
            ]);
        });
    });
});
