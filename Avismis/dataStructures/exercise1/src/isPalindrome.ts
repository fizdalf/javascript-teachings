function insertIntoStack(middle: number, stack: Stack, string: string) {
    for (let i = 0; i < middle; i++) {
        stack.push(string[i]);
    }
}

function checkIsEquals(middle: number, string: string, stack: Stack) {
    for (let i = middle + 1; i < string.length; i++) {
        if (stack.pop() !== string[i]) {
            return false;
        }
    }
    return true;
}

export default function isPalindrome(string: string): boolean {
    if (string.length < 2) {
        return true;
    }

    const middle = Math.floor(string.length / 2);
    const stack = new Stack();
    insertIntoStack(middle, stack, string);
    return checkIsEquals(middle, string, stack);
}


class Stack {
    private _array: any[];

    constructor() {
        this._array = [];
    }

    push(element: string) {
        this._array.push(element);
    }

    pop(): string {
        return this._array.pop();
    }
}
