import {Slot} from "./Slot";

export class MineGridCreator {
    private grid: any;
    private _minesPositions: number[][];
    private _gridSize: number;
    constructor(minesPositions: number[][], gridSize: number) {
        this._minesPositions = minesPositions;
        this._gridSize = gridSize;
    }

    getGrid() {
        // this.grid.forEach((array: []) => {
        //     array.forEach((position: number) => {
        //         if(this.grid[position] === this._minesPositions){
        //             new Slot(true, 0)
        //         }
        //         new Slot(false, 0)
        //     })
        // })
        // if (this._minesPositions.length === this._gridSize) {
        //     return this.grid
        // }
        if(this._gridSize <= 0 || this._minesPositions.length < 1){
            throw Error('I need the mines positions and the grid can not be 0 or less')
        }
    }
}
