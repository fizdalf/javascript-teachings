import {MineSweeper} from "../src/BuscaMinas";
import {MinePosition} from "../src/MinePositions";
import {PredeterminedMinesPositions} from "../src/PredeterminedMinesPositions";
import {Slot} from "../src/Slot";

const positions = [
    new MinePosition(1, 1),
    new MinePosition(0, 0),
]

describe('RevealMinesPositions', function () {
    it('should reveal the mines', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 2, 2)
        mineSweeper.openSlot(1, 1)
        expect(mineSweeper.getBoard()).toStrictEqual(
            [
                ["*", ""],
                ["", "*"]
            ]
        )
    })
});

