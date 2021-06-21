import {MineGridCreator} from "./MinesGridCreator";
import {MinePositionCollection} from "./MinePositions";
import {Slot} from "./Slot";
import {MineRandomizer} from "./MineRandomizer";

function nearbyEmptyOrNumberSlot(row: number, column: number) {
    let nearbyEmptySlotsCollection: any[] = []
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
    combinations.forEach(com => {
        let rowIndex = row + com[0];
        let columnIndex = column + com[1];
        const MinesPosition = new MinePositionCollection().hasMine(columnIndex, rowIndex)
        if (!MinesPosition) {
            const Slot = new MineSweeper().getSlotInPosition(rowIndex,columnIndex)
            nearbyEmptySlotsCollection.push(Slot)
        }
    })
    return nearbyEmptySlotsCollection
}

class MineSweeper {
    private mines = 8;
    private size = 8;// 8x8
    private grid: Slot[][];

    constructor() {
        const minePositionCollection: MinePositionCollection = MineRandomizer.getRandomMinePositions(this.mines, this.size);
        const mineGenerator = new MineGridCreator(minePositionCollection, this.size);
        this.grid = mineGenerator.getGrid()
    }

    /** returns TRUE if there is a mine, returns false otherwise */
    openSlot(row: number, column: number): boolean {
        if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
            throw new Error('Position out of bounds');
        }
        const slot = this.getSlotInPosition(row, column)
        if (slot.isRevealed()) {
            return false;
        }
        slot.reveal()
        if (!slot.isMine()) {
            while (slot.getContent() === "0") {
                const emptySlots = nearbyEmptyOrNumberSlot(row, column);
                emptySlots.forEach((slot) => {
                    slot.reveal()
                })
            }
            return false;
        }
        return true
    }

    getSlotInPosition(row: number, column: number): Slot {
        return this.grid[row][column]
    }

    isGameFinished = false;
    isGameWon = false;
    isGameLost = false;
}


//fggrflñuy78ttg
// const newGame = new MineSweeper();
//
// if (newGame.isGameFinished) {
//     console.log('Game Over');
// }


//
// function minesWeepers() {
//     while (square !== mina) {
//         if (square === number) {
//             // el numero debe indicar cuantas minas tiene alrededor
//             return;
//         }
//         //debe mostrar los datos los cuales serán vacios / eliminar el square
//     }
//     // Game Over
// }
//
// function tagging() {
//     const firstClick = "flag"
//     const secondClick = "questionMark"
//     if (firstClick) {
//         numberOfMines--
//     }
// }
//
// function timing() {
//     const currentTiming = 0
//     return currentTiming
// }
//
