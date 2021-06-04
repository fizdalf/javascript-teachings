class Queue {

    private list = new tributesQueue();

    enqueue(element: number) {

    }

    dequeue(): number | undefined {
        return 1;
    }
}

class tributesQueue {
    private firstDeadTribute: any;

    get nextTribute(): any {
        return this.firstDeadTribute;
    }

    constructor(head = null) {
        this.firstDeadTribute = head
    }

    getLast() {
        let lastTribute = this.firstDeadTribute;
        if (lastTribute) {
            while (lastTribute.next) {
                lastTribute = lastTribute.next;
            }
        }
        return lastTribute;
    }
}

class firstBloodBathQueue {
    private survivors;

    public next: firstBloodBathQueue = null;

    constructor(tribute: any) {
        this.survivors = tribute;
    }
}

