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
        const minesPositions = new PredeterminedMinesPositions
        const mineSweeper = new MineSweeper(minesPositions,8,8)
        const slot = mineSweeper.getSlotInPosition(2, 2)
        slot.reveal()
        expect(mineSweeper.openSlot(2,2)).toStrictEqual(false)
    })
    it('should return false if the content is not 0', function () {
        const minesPositions = new PredeterminedMinesPositions
        const mineSweeper = new MineSweeper(minesPositions,8,8)
        const slot = mineSweeper.getSlotInPosition(2, 2)
        slot.getContent()
        expect(mineSweeper.openSlot(2,2)).toStrictEqual(false)
    })
    it('should return false if the slot content is either a mine nor 0', function () {
        const minesPositions = new PredeterminedMinesPositions
        const mineSweeper = new MineSweeper(minesPositions,8,8)
        const slot = mineSweeper.getSlotInPosition(1, 3)
        slot.getContent()
        expect(mineSweeper.openSlot(1,3)).toStrictEqual(false)
    })
});