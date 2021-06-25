import {MineSweeper} from "../src/BuscaMinas";
import {PredeterminedMinesPositions} from "../src/PredeterminedMinesPositions";

describe('OpenSlot', function () {
    it('should throw error if the position given is out of bounds', function () {
        const mineSweeper = new MineSweeper(new PredeterminedMinesPositions(),8,8)
        expect(() => mineSweeper.openSlot(10,10)).toThrowError('Position out of bounds')
    })
    it('should return true if is a mine', function () {
        const minesPositions = new PredeterminedMinesPositions
        minesPositions.getMinePositions(8,8)
        const mineSweeper = new MineSweeper(minesPositions,8,8)
        expect(mineSweeper.openSlot(4,6)).toStrictEqual(true)
    })
    it('should return false if is revealed', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 8, 8)
        mineSweeper.openSlot(2, 2)
        expect(mineSweeper.openSlot(2, 2)).toStrictEqual(false)
    })
    it('should reveal adjacent Slot if not mine', function () {
        const minesPositions = new PredeterminedMinesPositions(
            [
                new MinePosition(0, 0),
            ]
        )
        const mineSweeper = new MineSweeper(minesPositions, 1, 3)
        mineSweeper.openSlot(2, 1);
        const theBoard = mineSweeper.getBoard();
        expect(theBoard).toStrictEqual(
            [
                ["", "1", "0"],
                ["1", "1", "0"],
                ["0", "0", "0"],
            ]
        );
    })

});