import {MineSweeper} from "../src/BuscaMinas";
import {PredeterminedMinesPositions} from "../src/PredeterminedMinesPositions";
import {MinePosition} from "../src/MinePositions";
import {Slot} from "../src/Slot";

const positions = [
    new MinePosition(7, 7),
    new MinePosition(4, 2),
    new MinePosition(5, 5),
    new MinePosition(5, 2),
    new MinePosition(4, 6),
    new MinePosition(1, 0),
    new MinePosition(2, 1),
    new MinePosition(7, 1),
]

describe('OpenSlot', function () {
    it('should throw error if the position given is out of bounds', function () {
        const mineSweeper = new MineSweeper(new PredeterminedMinesPositions(positions), 8, 8)
        expect(() => mineSweeper.openSlot(10, 10)).toThrowError('Position out of bounds')
    })
    it('should return true if is a mine', function () {
        const minesPositions = new PredeterminedMinesPositions([
            new MinePosition(4, 6),
            new MinePosition(2, 1),
        ])
        minesPositions.getMinePositions(8, 8)
        const mineSweeper = new MineSweeper(minesPositions, 8, 8)
        expect(mineSweeper.openSlot(4, 6)).toStrictEqual(true)
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