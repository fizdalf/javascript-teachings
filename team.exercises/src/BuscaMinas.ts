import {MineGridCreator} from "./MinesGridCreator";

class MineSweeper {

    private mines = 8;
    private size = 8;// 8x8

    constructor() {
        const mines = [
            [0,1],
            [2,2],
            [0,3],
            [8,4],
            [8,8],
            [3,3],
            [7,8],
            [5,2],
        ]

        //const mineGenerator = new  MineGridCreator(mines, this.size);
        // this.grid = mineGenerator.getGrid()
        //
        // const grid = [
        //     [
        //         new Slot(true), new Slot(false,1), new Slot(false, 1), new Slot(false, 1), new Slot(false, 1), new Slot(), new Slot(), new Slot()
        //     ],
        //     [
        //         new Slot(), new Slot(false,), new Slot(), new Slot(true), new Slot(), new Slot(), new Slot(), new Slot()
        //     ],
        //     [
        //         new Slot(), new Slot(false,), new Slot(), new Slot(), new Slot(), new Slot(), new Slot(), new Slot()
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        //     [
        //         1, 2, 3, 4, 5, 6, 7, 8
        //     ],
        // ]


    }

    isGameFinished = false;
    isGameWon = false;
    isGameLost = false;


}

//
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
