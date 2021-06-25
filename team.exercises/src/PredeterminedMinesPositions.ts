import {MinePosition, MinePositionCollection} from "./MinePositions";

export class  PredeterminedMinesPositions {
    getMinePositions(minesCount: number, gridSize: number): MinePositionCollection {
        return this.minePositions;
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