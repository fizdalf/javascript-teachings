class NumberQueue {
    array = [];

    enqueue(element: number) {
        this.array.push(element);
        console.log(this.array);
    }

    dequeue(): number {
        if (this.array.length === 0) {
            throw Error('Empty QUEUE');
        }
        const newArray = [];
        this.array.forEach((element, index) => {
            if (index > 0) {
                newArray.push(element);
            }
        })
        const firstElement = this.array[0]
        this.array = newArray;
        console.log(this.array);
        return firstElement;
    }
}

const myQueue = new NumberQueue();
// myQueue.enqueue("hello");


class NumberNode {
    data: number;
    next: NumberNode

    constructor(data: number) {
        this.data = data;
    }
}

class linkedListQueue {

    head: NumberNode = null;

    enqueue(something: number){
        const node = new NumberNode(something);
        if(!this.head){

        }
    }

}
