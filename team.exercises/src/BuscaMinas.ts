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

    /** returns TRUE if there is a mine, returns false otherwise */
    openSlot(row: number, column: number): boolean {
        if (this.isOutOfBounds(row, column)) {
            throw new Error('Position out of bounds');
        }
        return this.revealNext(row, column);
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
        if (!slot.isMine()) {
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
        return true;
    }

    getSlotInPosition(row: number, column: number): Slot {
        return this.grid[row][column]
    }

    getBoard() {
        return this.grid.forEach(array => {array.forEach(slot => {slot.getContent()})})
    }

    isGameFinished = false;
    isGameWon = false;
    isGameLost = false;
}

