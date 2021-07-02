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
        if (this.tagState === TagStates.WRONGFLAG) {
            return '#'
        }
        if (this.hasMine) {
            return "*";
        }
        return this.value.toString();
    }

    isFlag(): boolean {
        return this.tagState === TagStates.FLAG;
    };

    reveal() {
        this.revealed = true;
        if (this.isFlag() && !this.hasMine) {
            return this.tagState === TagStates.WRONGFLAG
        }
        this.tagState = TagStates.NONE;
        return this.value;

    }

    markWithFlag() {
        // TODO: 3 - Prevent this from happening if the slot is revealed (with test)
        if (!this.isRevealed()) {
            this.tagState = TagStates.FLAG;
        }
    }

    unmarkFlag() {
        // TODO: 4 - Prevent this from happening if the slot is revealed (with test)
        if (!this.isRevealed()) {
            if (this.isFlag()) {
                this.tagState = TagStates.NONE
            }
        }
    }
}
