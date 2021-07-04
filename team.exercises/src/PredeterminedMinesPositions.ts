import {MinePosition, MinePositionCollection} from "./MinePositions";
import {MinePositionGenerator} from "./BuscaMinas";

export class PredeterminedMinesPositions implements MinePositionGenerator {

    private minePositions;

    constructor(positions: MinePosition[]) {
        this.minePositions = new MinePositionCollection()
        positions.forEach(x => this.minePositions.addPosition(x))
    }

    getMinePositions(minesCount: number, gridSize: number): MinePositionCollection {
        return this.minePositions;
    }
}