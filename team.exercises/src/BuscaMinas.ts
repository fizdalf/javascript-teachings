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
    private flags = 0;

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
        // TODO: update the function to NOT reveal those slots that have Flags on them
        // TODO: if the slot to open contains a mine and don't have flags, reveal ALL the mines
        // TODO: ignore the open slot if the slot has a flag
        return this.revealNext(row, column);
    }

    toggleFlagSlot(row: number, column:number){
        //todo: create a function that toggles the flag for a specific slot
        //todo: make sure to keep count of how many mines are left
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

    private getSlotInPosition(row: number, column: number): Slot {
        return this.grid[row][column]
    }

    getBoard(): string[][] {
        const newGrid: string[][] = [];
        this.grid.forEach(x => {
            const newRow: string[] = [];
            x.forEach(slot => {
                newRow.push(slot.getContent());
            })
            newGrid.push(newRow);
        })
        return newGrid;
        // return this.grid.map(row => row.map(slot => slot.getContent()));
    }

    isGameFinished = false;
    isGameWon = false;
    isGameLost = false;
}

