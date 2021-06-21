import {MineGridCreator} from "../src/MinesGridCreator";
import {Slot} from "../src/Slot";
import {MinePositionCollection, MinePosition} from "../src/MinePositions";

describe('MinesGridCreator', () => {
        it('should throw if size is 0 or less', () => {
            let mineCreator = new MineGridCreator(new MinePositionCollection(), 0);
            expect(() => mineCreator.getGrid()).toThrowError('I need the mines positions and the grid can not be 0 or less')
        })

         it('should return the grid with slots (is not important the slot content)', () => {
              let mineCreator = new MineGridCreator([[0, 1]], 2);
              expect(mineCreator.getGrid()).toStrictEqual([
                  [new Slot(false,0),new Slot(false,0)],
                  [new Slot(false,0),new Slot(false,0)]
              ])
         })

        it('should return the grid with slots and with the 1 mine in the correct position', () => {
            const minePosition = new MinePositionCollection();
            minePosition.addPosition(new MinePosition(1, 0))
            let mineCreator = new MineGridCreator(minePosition, 2);
            expect(mineCreator.getGrid()).toStrictEqual([
                [new Slot(false, 1), new Slot(true, 0)],
                [new Slot(false, 1), new Slot(false, 1)]
            ])
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

