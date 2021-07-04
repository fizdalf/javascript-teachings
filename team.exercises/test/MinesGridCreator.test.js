"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinesGridCreator_1 = require("../src/MinesGridCreator");
var Slot_1 = require("../src/Slot");
var MinePositions_1 = require("../src/MinePositions");
describe('MinesGridCreator', function () {
    it('should throw if size is 0 or less', function () {
        var mineCreator = new MinesGridCreator_1.MineGridCreator(new MinePositions_1.MinePositionCollection(), 0);
        expect(function () { return mineCreator.getGrid(); }).toThrowError('I need the mines positions and the grid can not be 0 or less');
    });
    it('should return the grid with slots (is not important the slot content)', function () {
        var mineCreator = new MinesGridCreator_1.MineGridCreator(new MinePositions_1.MinePositionCollection(), 2);
        expect(mineCreator.getGrid()).toStrictEqual([
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0)],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0)]
        ]);
    });
    it('should return the grid with slots and with the 1 mine in the correct position', function () {
        var minePosition = new MinePositions_1.MinePositionCollection();
        minePosition.addPosition(new MinePositions_1.MinePosition(0, 1));
        var mineCreator = new MinesGridCreator_1.MineGridCreator(minePosition, 2);
        expect(mineCreator.getGrid()).toStrictEqual([
            [new Slot_1.Slot(false, 1), new Slot_1.Slot(true, 0)],
            [new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 1)]
        ]);
    });
    it('should return the grid with 8 slots in 8 arrays', function () {
        var minePosition = new MinePositions_1.MinePositionCollection();
        minePosition.addPosition(new MinePositions_1.MinePosition(0, 1));
        minePosition.addPosition(new MinePositions_1.MinePosition(2, 2));
        minePosition.addPosition(new MinePositions_1.MinePosition(0, 3));
        minePosition.addPosition(new MinePositions_1.MinePosition(7, 4));
        minePosition.addPosition(new MinePositions_1.MinePosition(7, 7));
        minePosition.addPosition(new MinePositions_1.MinePosition(3, 3));
        minePosition.addPosition(new MinePositions_1.MinePosition(6, 7));
        minePosition.addPosition(new MinePositions_1.MinePosition(5, 2));
        expect(new MinesGridCreator_1.MineGridCreator(minePosition, 8).getGrid()).toStrictEqual([
            [new Slot_1.Slot(false, 1), new Slot_1.Slot(true, 0), new Slot_1.Slot(false, 2), new Slot_1.Slot(true, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0),],
            [new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(false, 3), new Slot_1.Slot(false, 2), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0),],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(true, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0),],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(true, 1), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0),],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(false, 2), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0),],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(true, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 1),],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(true, 1),],
            [new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(true, 0), new Slot_1.Slot(false, 1), new Slot_1.Slot(false, 2), new Slot_1.Slot(true, 1),],
        ]);
    });
});
