export class Queue {
    private _array: any[] = [];

    enqueue(element: number) {
        this._array.push(element);
    }

    dequeue(): number | undefined {
        return this._array.shift();
    }
}

const queue = new  Queue()
for (let i = 0; i < 10000; i++) {
    queue.enqueue(i)
}
for (let i = 0; i < 10000; i++) {
    queue.dequeue()
}
for (let i = 0; i < 5000; i++) {
    queue.dequeue()
}
for (let i = 0; i < 15000; i++) {
    queue.dequeue()
}