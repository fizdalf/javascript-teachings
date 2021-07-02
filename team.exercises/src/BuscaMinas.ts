import {MineGridCreator} from "./MinesGridCreator";
import {MinePositionCollection} from "./MinePositions";
import {Slot} from "./Slot";

export interface MinePositionGenerator {
    getMinePositions(minesCount: number, gridSize: number): MinePositionCollection
}

export class MineSweeper {
    private size;
    private grid: Slot[][];
    private minePositionCollection: MinePositionCollection;

    constructor(minePositionGenerator: MinePositionGenerator, mineCount: number, gridSize: number) {
        this.size = gridSize;
        this.minePositionCollection = minePositionGenerator.getMinePositions(mineCount, gridSize);
        const mineGenerator = new MineGridCreator(this.minePositionCollection, this.size);
        this.grid = mineGenerator.getGrid()
    }

    openSlot(row: number, column: number): boolean {
        if (this.isOutOfBounds(row, column)) {
            throw new Error('Position out of bounds');
        }
        const isMine = this.revealNext(row, column);
        if (isMine) {
            this.revealMinesPositions()
            this.revealWrongFlags();
        }
        return isMine;
    }

    private isOutOfBounds(row: number, column: number) {
        return row < 0 || row >= this.size || column < 0 || column >= this.size;
    }

    private revealNext(row: number, column: number) {
        if (this.isOutOfBounds(row, column)) {
            return false;
        }
        const slot = this.getSlotInPosition(row, column)
        if (slot.isRevealed()) {
            return false;
        }
        slot.reveal();
        if (slot.isMine()) {
            return true;
        }
        if (slot.getContent() === "0") {
            const combinations = [
                [-1, -1],
                [-1, 0],
                [-1, 1],
                [0, -1],
                [0, 1],
                [1, -1],
                [1, 0],
                [1, 1]
            ]

            combinations.forEach((combination) => {
                this.revealNext(row + combination[0], column + combination[1]);
            })
        }
        return false;
    }

    private revealMinesPositions() {
        this.minePositionCollection.positions.forEach((minePosition) => {
            const slot = this.getSlotInPosition(minePosition.row, minePosition.column)
            slot.reveal()
        })
    }//todo: 1 - test de esto ^^

    private getSlotInPosition(row: number, column: number): Slot {
        return this.grid[row][column]
    }

    getBoard() {
        const newGrid: string[][] = [];
        this.grid.forEach(x => {
            const newRow: string[] = [];
            x.forEach(slot => {
                newRow.push(slot.getContent());
            })
            newGrid.push(newRow);
        })
        return newGrid;
    }

    private revealWrongFlags() { // todo: 5 - reveal all the slots that have FLAG but not mines!! (with test)

    }

    //todo: 2 - función que pone y saca banderas (with test)

    toggleFlag(row: number, column: number) {
        const slot = this.getSlotInPosition(row,column)
        if(slot.isFlag()){
            slot.unmarkFlag()
        }
        slot.markWithFlag()
    }

    isGameFinished = false;
    isGameWon = false;
    isGameLost = false;

}

