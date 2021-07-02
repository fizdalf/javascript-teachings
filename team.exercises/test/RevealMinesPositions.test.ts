import {MineSweeper} from "../src/BuscaMinas";
import {MinePosition} from "../src/MinePositions";
import {PredeterminedMinesPositions} from "../src/PredeterminedMinesPositions";
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

describe('RevealMinesPositions', function () {
    it('should reveal the mines', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 8, 8)
        mineSweeper.openSlot(7,7)
        expect(mineSweeper.getBoard()).toStrictEqual(
            [
                [new Slot(false,1), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
                [new Slot(true,1), new Slot(false,2), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
                [new Slot(false,2), new Slot(true,1), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
                [new Slot(false,1), new Slot(false,2), new Slot(false,2), new Slot(false,2), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
                [new Slot(false,0), new Slot(false,2), new Slot(true,1), new Slot(false,3), new Slot(true,1), new Slot(false,2), new Slot(false,1), new Slot(false,0),],
                [new Slot(false,0), new Slot(false,2), new Slot(true,1), new Slot(false,3), new Slot(false,2), new Slot(true,1), new Slot(false,1), new Slot(false,0),],
                [new Slot(false,1), new Slot(false,2), new Slot(false,2), new Slot(false,1), new Slot(false,1), new Slot(false,1), new Slot(false,2), new Slot(false,1),],
                [new Slot(false,1), new Slot(true,0), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,1), new Slot(true,0),],
            ]
        )
    })
});

