class ListNode {
    private _data;

    public next?: ListNode;

    constructor(data: any) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}

export class LinkedListQueue {
    private head?: ListNode;
    private tail?: ListNode;

    enqueue(element: any) {
        if (this.tail) {
            const newNode = new ListNode(element);
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        this.head = new ListNode(element);
        this.tail = this.head;
    }

    dequeue(): any {
        if (this.head) {
            const data = this.head.data;
            this.tail = this.head.next;
            this.head = this.head.next;
            return data;
        }
        return null;
    }
}

const myQueue = new LinkedListQueue();

console.log(myQueue.dequeue());
myQueue.enqueue('verde');
console.log(myQueue.dequeue());
myQueue.enqueue('verde');
myQueue.enqueue('naranja');
console.log(myQueue.dequeue());
const myQueue2 = new LinkedListQueue();
myQueue2.enqueue('verde');
myQueue2.enqueue('naranja');
myQueue2.enqueue('rojo');
console.log(myQueue2.dequeue(), myQueue2.dequeue(), myQueue2.dequeue());
//
//

// meter 10000, sacar 10000
// queue con array
// queue con linkedList
// meter 10000, sacar 5000, meter 10000, sacar 15000
// queue con array
// queue con linkedList


console.time('Queue with array');
//el codigo aqui

console.timeEnd('Queue with array');
for(let i = 0; i< 1; i++){
    console.log('test');
}
console.time('Queue with array enqueue 10k elements dequeue 10k elements');
Array(50000).fill(0);
console.timeEnd('Queue with array enqueue 10k elements dequeue 10k elements');
