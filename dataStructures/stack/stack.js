/// 5,6,1,3,9


const stack = [];

const pushStep1 = [5];
const pushStep2 = [5, 6];
const pushStep3 = [5, 6, 1];
const pushStep4 = [5, 6, 1, 3];
const pushStep5 = [5, 6, 1, 3, 9];


// LIFO

const popStep1 = [5, 6, 1, 3];
const popStep2 = [5, 6, 1,]
const popStep3 = [5, 6,]
const popStep4 = [5]
const popStep5 = [];


const stackSteps = [
    [5, null],
    [6, null],
    [1, 1],
    [null, 6],
    [3, 3],
    [9, null],
    [null, 9],
    [null, 5]
];

const stackStep1 = [5];
const stackStep2 = [5, 6];
const stackStep3 = [5, 6, 1];
const stackStep4 = [5, 6];
const stackStep5 = [5];
const stackStep6 = [5, 3];
const stackStep7 = [5,];
const stackStep8 = [5, 9];
const stackStep9 = [5];
const stackStep10 = [];


class Stack {
    array = [];

    push(element) {
        this.array.push(element);
        console.log(this.array);
    }

    pop() {
        const toReturn = this.array[this.array.length - 1];
        this.array = this.array.filter((element, index) => {
            return index !== this.array.length - 1;
        });
        console.log(this.array);
        return toReturn;
    }
}

const myStack = new Stack();

myStack.push(5);
myStack.push(6);
myStack.push(1);
myStack.pop();
myStack.pop();
myStack.push(3);
myStack.pop();
myStack.push(9);
myStack.pop();
myStack.pop();


function sum(a, b) {
    return a + b;
}


function multiply(a, b) {
    return a * b;
}

const result = sum(multiply(sum(4, 3), 1));

