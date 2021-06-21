enum TagStates {
    FLAG = "FLAG",
    QUESTION = "QUESTION",
    NONE = "NONE"
}

export class Slot {
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

    /**
     *    Returns the following
     *      f => is not revealed and is a flag
     *      ? => is not revealed and is a question mark
     *     '' => is not revealed and is not flag nor question mark
     *      * => is revealed and is a mine!
     *    "n" => is revealed and has n mines nearby
     */
    getContent(): string {
        if (!this.isRevealed()) {
            if (this.isFlag()) {
                return 'f';
            }
            if (this.isQuestion()) {
                return '?';
            }
            return '';
        }

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