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

describe('toggleFlag', function () {
    it('should mark a slot with a flag', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 8, 8)
        expect(mineSweeper.toggleFlag(5, 4)).toStrictEqual(new Slot(false, 1).markWithFlag())
    });
    it('should unmark a slot with a flag if already has one', function () {
        const minesPositions = new PredeterminedMinesPositions(positions)
        const mineSweeper = new MineSweeper(minesPositions, 8, 8)
        expect(mineSweeper.toggleFlag(5, 4)).toStrictEqual(new Slot(false, 1).unmarkFlag())
    });
})

describe('mark and unmark flag', function () {
    it('should mark a slot with the tagstate flag', function () {
        const slot = new Slot(false,0)
        function solution (){
            if(slot.getContent() === "f"){
                undefined;
            }
        }
        expect(slot.markWithFlag()).toStrictEqual(solution())
    });
    it('should unmark a slot with the tagstate none', function () {
        const slot = new Slot(false,0)
        function solution (){
            if(slot.getContent() === ""){
                undefined;
            }
        }
        expect(slot.unmarkFlag()).toStrictEqual(solution())
    });
})