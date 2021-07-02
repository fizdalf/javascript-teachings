import {MineSweeper} from "../src/BuscaMinas";
import {PredeterminedMinesPositions} from "../src/PredeterminedMinesPositions";
import {MinePosition} from "../src/MinePositions";

const positions = [
    new MinePosition(1, 1),
    new MinePosition(0, 0),
]

describe('MineSweeper', () => {
    describe('openSlot', () => {
        it('should reveal all the slots that have FLAG but not mines if you happen to open a slot with a mine in it', () => {
            const minesPositions = new PredeterminedMinesPositions(positions)
            const mineSweeper = new MineSweeper(minesPositions, 2, 2)
            mineSweeper.toggleFlag(0, 1)
            mineSweeper.openSlot(1, 1)
            expect(mineSweeper.getBoard()).toStrictEqual([
                ["*", "#"],
                ["", "*"]
            ])
        })
    })

})
