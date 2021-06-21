import {MinePosition, MinePositionCollection} from "./MinePositions";

export class MineRandomizer {
    static getRandomMinePositions(mines: number, size: number) {
        const positions = new MinePositionCollection();
        for (let i = 0; i < mines; i++) {
            let minePosition = MineRandomizer.getRandomMinePosition(size)
            while (positions.hasMine(minePosition.column, minePosition.row)) {
                minePosition = MineRandomizer.getRandomMinePosition(size)
            }
            positions.addPosition(minePosition);
        }
        return positions;
    }

    static getRandomMinePosition(size: number) {
        const column = Math.floor(Math.random() * size);
        const row = Math.floor(Math.random() * size);
        return new MinePosition(column, row);
    }
}

