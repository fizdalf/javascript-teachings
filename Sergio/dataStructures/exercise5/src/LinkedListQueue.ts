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

