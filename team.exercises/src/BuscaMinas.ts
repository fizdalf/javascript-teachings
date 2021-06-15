import {MineGridCreator} from "./MinesGridCreator";

enum TagStates {
    FLAG = "FLAG",
    QUESTION = "QUESTION",
    NONE = "NONE"
}

class Slot {
    private value: number;
    private revealed = false;
    private tagState: TagStates | undefined
    private hasMine: boolean;

    constructor(hasMine: boolean, minesAround: number = 0) {
        this.hasMine = hasMine;
        this.value = minesAround;
    }

    isRevealed(): boolean {
        return this.revealed;
    };

    isMine(): boolean {
        return this.hasMine;
    };

    getContent(): string {
        if (this.hasMine) {
            return '*';
        }
        return this.value.toString();
    }

    isFlag(): boolean {
        return this.tagState === TagStates.FLAG;
    };

    isQuestion(): boolean {
        return this.tagState === TagStates.QUESTION;
    };

    reveal() {
        this.revealed = true;
        return this.value;
    }

    markWithFlag() {
        this.tagState = TagStates.FLAG;
    }
}

class MineSweeper {

    private mines = 8;
    private size = 8;// 8x8

    constructor() {
        const mines = [
            [0,1],
            [0,2],
            [0,3],
            [0,4]
        ]
        const mineGenerator = new MineGridCreator(mines,this.size);
        // this.grid = mineGenerator.getGrid()

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


const newGame = new MineSweeper();

if (newGame.isGameFinished) {
    console.log('Juego terminado');
}






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
