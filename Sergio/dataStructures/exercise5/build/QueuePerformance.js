"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueueArray_1 = require("./QueueArray");
var LinkedListQueue_1 = require("./LinkedListQueue");
var queueTest = new QueueArray_1.Queue();
var linkedQueue = new LinkedListQueue_1.LinkedListQueue();
// scenario 1
console.time('Queue with array, first scenario');
for (var i = 0; i < 10000; i++) {
    queueTest.enqueue(i);
}
for (var i = 0; i < 10000; i++) {
    queueTest.dequeue();
}
console.timeEnd('Queue with array, first scenario');
console.time('Queue with linkedList, first scenario');
for (var i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 0; i < 10000; i++) {
    linkedQueue.dequeue();
}
console.timeEnd('Queue with linkedList, first scenario');
// scenario 2
console.time('Queue with array, second scenario');
for (var i = 0; i < 10000; i++) {
    queueTest.enqueue(i);
}
for (var i = 0; i < 5000; i++) {
    queueTest.dequeue();
}
for (var i = 0; i < 10000; i++) {
    queueTest.enqueue(i);
}
for (var i = 0; i < 15000; i++) {
    queueTest.dequeue();
}
console.timeEnd('Queue with array, second scenario');
console.time('Queue with linkedList, second scenario');
for (var i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 0; i < 5000; i++) {
    linkedQueue.dequeue();
}
for (var i = 0; i < 10000; i++) {
    queueTest.enqueue(i);
}
for (var i = 0; i < 15000; i++) {
    linkedQueue.dequeue();
}
console.timeEnd('Queue with linkedList, second scenario');
