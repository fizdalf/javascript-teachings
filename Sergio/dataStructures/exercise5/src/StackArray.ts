export class Stack {
    private _array: any[];

    constructor() {
        this._array = [];
    }

    push(element: number) {
        this._array.push(element);
    }

    pop(): number {
        return this._array.pop();
    }
}

const stack = new Stack()
for (let i = 0; i < 10000; i++) {
    stack.push(i)
}
for (let i = 0; i < 10000; i++) {
    stack.pop()
}
for (let i = 0; i === 5000; i++) {
    stack.pop()
}
for (let i = 0; i === 15000; i++) {
    stack.pop()
}