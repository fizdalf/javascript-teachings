import {MineSweeper} from "./BuscaMinas";
import {PredeterminedMinesPositions} from "./PredeterminedMinesPositions";
import {MinePosition} from "./MinePositions";

enum TagStates {
    WRONGFLAG = "WRONGFLAG",
    FLAG = "FLAG",
    NONE = "NONE",
}

export class Slot {
    private value: number;
    private revealed = false;
    private tagState: TagStates = TagStates.NONE;
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
        if (!this.isRevealed()) {
            if (this.isFlag()) {
                return 'f';
            }
            return '';
        }
        //todo: if the state is wrong mine return "#"
        //todo esto pasa una vez se ha terminado el juego porque has pisado una mina
        if (new MineSweeper(new PredeterminedMinesPositions([new MinePosition(1, 1)]), 8, 8).lose()) {
            if (this.isFlag() && !this.hasMine) {
                return '#'
            }
        } // no se como decir bien que solo haga eso si pierdes
        if (this.hasMine) {
            return "*";
        }
        return this.value.toString();
    }

    isFlag(): boolean {
        return this.tagState === TagStates.FLAG;
    };

    reveal() {
        // todo: if the slot is revealed and there was a flag, but NO mine, we have to set a new state
        // that will indicate it was a "wrong" flag
        this.revealed = true;
        if (this.isFlag() && !this.hasMine) {
            return this.tagState === TagStates.WRONGFLAG
        }
        this.tagState = TagStates.NONE;
        return this.value;

    }

    markWithFlag() {
        this.tagState = TagStates.FLAG;
    }

    unmarkFlag() {
        if (this.isFlag()) {
            this.tagState = TagStates.NONE
        }
    }
}