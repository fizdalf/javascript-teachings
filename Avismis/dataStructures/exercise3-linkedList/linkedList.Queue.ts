class Queue {

    private list = new tributesQueue();

    tributes = []

    enqueue(element: number) {
        this.tributes.push(element);
    }

    dequeue(): number | undefined {
        if (this.tributes.length === 1) {
            throw Error('We have our Hunger Games winner!');
        }
        const newArray = [];
        this.tributes.forEach((element, index) => {
            if (index > 0) {
                newArray.push(element);
            }
        })
        const firstElement = this.tributes[0]
        this.tributes = newArray;
        return firstElement;
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
        let winnerTribute = this.firstDeadTribute;
        if (winnerTribute) {
            while (winnerTribute.next) {
                winnerTribute = winnerTribute.next;
            }
        }
        return winnerTribute;
    }
}


