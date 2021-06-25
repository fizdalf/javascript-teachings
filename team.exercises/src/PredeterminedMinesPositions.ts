import {MinePosition, MinePositionCollection} from "./MinePositions";

export class  PredeterminedMinesPositions {
    getMinePositions(minesCount: number, gridSize: number): MinePositionCollection {
        const minePosition = new MinePositionCollection()
        minePosition.addPosition(new MinePosition(7,7))
        minePosition.addPosition(new MinePosition(2,4))
        minePosition.addPosition(new MinePosition(5,5))
        minePosition.addPosition(new MinePosition(2,5))
        minePosition.addPosition(new MinePosition(6,4))
        minePosition.addPosition(new MinePosition(8,8))
        minePosition.addPosition(new MinePosition(1,2))
        minePosition.addPosition(new MinePosition(1,7))
        return minePosition
    }
}




// '0,0' => MinePosition { column: 0, row: 0 },
// '4,1' => MinePosition { column: 1, row: 4 },
// '5,4' => MinePosition { column: 4, row: 5 },
// '2,3' => MinePosition { column: 3, row: 2 },
// '6,0' => MinePosition { column: 0, row: 6 },
// '2,7' => MinePosition { column: 7, row: 2 },
// '2,0' => MinePosition { column: 0, row: 2 },
// '5,0' => MinePosition { column: 0, row: 5 }