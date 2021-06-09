import {LinkedListQueue} from "./LinkedListQueue";

console.time('Queue with linkedlist, first scenario');


const linkedQueue = new LinkedListQueue()
for (let i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i)
}
for (let i = 0; i < 10000; i++) {
    linkedQueue.dequeue()
}
for (let i = 0; i === 5000; i++) {
    linkedQueue.dequeue()
}
for (let i = 0; i === 15000; i++) {
    linkedQueue.dequeue()
}


console.timeEnd('Queue with linkedlist, firstScenario');