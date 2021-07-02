import {MineSweeper} from "../src/BuscaMinas";
import {PredeterminedMinesPositions} from "../src/PredeterminedMinesPositions";
import {MinePosition} from "../src/MinePositions";
import {Slot} from "../src/Slot";

const positions = [
    new MinePosition(0, 0),
    new MinePosition(1, 1),
]
// todo: Organize test PER CLASS, each class should have all the tests pertaining it
describe('toggleFlag', function () {
    it('should mark a slot with a flag', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 2, 2)
        mineSweeper.toggleFlag(0, 0);
        expect(mineSweeper.getBoard()).toStrictEqual(
            [
                ["f", ""],
                ["", ""],
            ]
        )
    });
    it('should unmark a slot with a flag if already has one', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 2, 2);
        mineSweeper.toggleFlag(0, 0);
        mineSweeper.toggleFlag(0, 0);
        expect(mineSweeper.getBoard()).toStrictEqual([["",""],["",""]]);
    });
})

describe('mark and unmark flag', function () {
    it('should mark a slot with the tagstate flag', function () {
        const slot = new Slot(false, 0)
        slot.markWithFlag();
        expect(slot.getContent()).toStrictEqual("f");
    });
    it('should unmark a slot with the tagstate none', function () {
        const slot = new Slot(false, 0)
        slot.unmarkFlag()
        expect(slot.getContent()).toStrictEqual("")
    });

})
