enum TagStates {
    FLAG = "FLAG",
    NONE = "NONE"
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

    /**
     *    Returns the following
     *      f => is not revealed and is a flag
     *     '' => is not revealed and is not flag nor question mark
     *      * => is revealed and is a mine!
     *    "n" => is revealed and has n mines nearby
     */
    getContent(): string {
        if (!this.isRevealed()) {
            if (this.isFlag()) {
                return 'f';
            }
            return '';
        }

        //todo: if the state is wrong mine return "#"
        if (this.hasMine) {
            return '*';
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
        this.tagState = TagStates.NONE;
        return this.value;
    }

    markWithFlag() {
        this.tagState = TagStates.FLAG;
    }
    // todo: create function to remove the flag
}