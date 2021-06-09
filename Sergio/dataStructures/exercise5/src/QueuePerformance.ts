// scenario 1
console.time('Queue with array, first scenario');
import {Queue} from "./QueueArray";

const queueTest = new  Queue()
for (let i = 0; i < 10000; i++) {
    queueTest.enqueue(i)
}
for (let i = 0; i < 10000; i++) {
    queueTest.dequeue()
}
console.timeEnd('Queue with array, first scenario');

console.time('Queue with linkedList, first scenario');
import {LinkedListQueue} from "./LinkedListQueue";

const linkedQueue = new LinkedListQueue()
for (let i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i)
}
for (let i = 0; i < 10000; i++) {
    linkedQueue.dequeue()
}
console.timeEnd('Queue with linkedList, first scenario');



// scenario 2
console.time('Queue with array, second scenario');
for (let i = 0; i < 10000; i++) {
    queueTest.enqueue(i)
}
for (let i = 0; i < 5000; i++) {
    queueTest.dequeue()
}
for (let i = 0; i < 15000; i++) {
    queueTest.dequeue()
}
console.timeEnd('Queue with array, second scenario');

console.time('Queue with linkedList, second scenario');
for (let i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i)
}
for (let i = 0; i < 5000; i++) {
    linkedQueue.dequeue()
}
for (let i = 0; i < 15000; i++) {
    linkedQueue.dequeue()
}
console.timeEnd('Queue with linkedList, second scenario');