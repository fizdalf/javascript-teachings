import {MineGridCreator} from "../src/MinesGridCreator";
import {Slot} from "../src/Slot";

describe('MinesGridCreator', () => {
        it('should return empty array if get size 0 or less and dont get minePosition', () => {
            let mineCreator = new MineGridCreator([], -5);
            expect(mineCreator.getGrid()).toThrowError('I need the mines positions and the grid can not be 0 or less')
        })
        // it('should return an empty array if minesPosition is not equals than gridSize', () => {
        //     expect(new MineGridCreator([[0, 0], [1, 1], [2, 2], [3, 3]], 8).getGrid()).toStrictEqual([])
        // })
        // it('should return the grid with 8 slots in 8 arrays', () => {
        //     const mines = [[0,1], [2,2], [0,3], [7,4], [7,7], [3,3], [6,7], [5,2],]
        //     expect(new MineGridCreator(mines, 8).getGrid()).toStrictEqual([
        //         [new Slot(false,1), new Slot(true,0), new Slot(false,1), new Slot(true,0), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
        //         [new Slot(false,1), new Slot(false,2), new Slot(false,3), new Slot(false,2), new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
        //         [new Slot(false,0), new Slot(false,1), new Slot(true,0), new Slot(false,2), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
        //         [new Slot(false,0), new Slot(false,1), new Slot(false,2), new Slot(true,0), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
        //         [new Slot(false,0), new Slot(false,1), new Slot(false,1), new Slot(false,1), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,0),],
        //         [new Slot(false,0), new Slot(false,1), new Slot(true,0), new Slot(false,1), new Slot(false,0), new Slot(false,0), new Slot(false,1), new Slot(false,0),],
        //         [new Slot(false,0), new Slot(false,1), new Slot(false,1), new Slot(false,2), new Slot(false,0), new Slot(false,1), new Slot(false,2), new Slot(true,0),],
        //         [new Slot(false,0), new Slot(false,0), new Slot(false,0), new Slot(false,1), new Slot(true,0), new Slot(false,1), new Slot(false,2), new Slot(true,0),],
        //     ])
        // })
    }
)

