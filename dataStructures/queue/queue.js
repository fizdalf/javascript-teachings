/// 5,6,1,3,9


const queue = [];

const enqueueStep1 = [5];
const enqueueStep2 = [5, 6];
const enqueueStep3 = [5, 6, 1];
const enqueueStep4 = [5, 6, 1, 3];
const enqueueStep5 = [5, 6, 1, 3, 9];


// FIFO

const dequeueStep1 = [6, 1, 3, 9];
const dequeueStep2 = [1, 3, 9];
const dequeueStep3 = [3, 9];
const dequeueStep4 = [9];
const dequeueStep5 = [];


const queueSteps = [
    [5, null],
    [6, null],
    [1, 5],
    [null, 6],
    [3, 1],
    [9, null],
    [null, 3],
    [null, 9]
];

const queueStep1 = [5];
const queueStep2 = [5, 6];
const queueStep3 = [5, 6, 1];
const queueStep4 = [6, 1];
const queueStep5 = [1];
const queueStep6 = [1, 3];
const queueStep7 = [3];
const queueStep8 = [3, 9];
const queueStep9 = [9];
const queueStep10 = [];


class IntQueue {
    array = [];

    enqueue(something) {
        if(isNaN(parseInt(something))){
            throw new Error('Only ints allowed');
        }
        this.array.push(something);
        console.log(this.array);
    }

    dequeue() {
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

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(1);
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.enqueue(9);
myQueue.dequeue();
myQueue.dequeue();
