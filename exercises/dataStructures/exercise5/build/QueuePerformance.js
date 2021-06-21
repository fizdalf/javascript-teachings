"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListQueue_1 = require("./LinkedListQueue");
var ArrayQueue_1 = require("./ArrayQueue");
console.time('ArrayQueue first');
var arrayQueue = new ArrayQueue_1.ArrayQueue();
for (var i = 0; i < 10000; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 0; i < 10000; i++) {
    arrayQueue.dequeue();
}
console.timeEnd('ArrayQueue first');
console.time('LinkedListQueue first');
var linkedListQueue = new LinkedListQueue_1.LinkedListQueue();
for (var i = 0; i < 10000; i++) {
    linkedListQueue.enqueue(i);
}
for (var i = 0; i < 10000; i++) {
    linkedListQueue.dequeue();
}
console.timeEnd('LinkedListQueue first');
// Insert 10k elements, remove 5k elements, insert 10k elements, remove 15k elements
console.time('ArrayQueue second');
var arrayQueue2 = new ArrayQueue_1.ArrayQueue();
for (var i = 0; i < 10000; i++) {
    arrayQueue2.enqueue(i);
}
for (var i = 0; i < 5000; i++) {
    arrayQueue2.dequeue();
}
for (var i = 0; i < 10000; i++) {
    arrayQueue2.enqueue(i);
}
for (var i = 0; i < 15000; i++) {
    arrayQueue2.dequeue();
}
console.timeEnd('ArrayQueue second');
console.time('LinkedListQueue second');
var linkedListQueue2 = new LinkedListQueue_1.LinkedListQueue();
for (var i = 0; i < 10000; i++) {
    linkedListQueue2.enqueue(i);
}
for (var i = 0; i < 5000; i++) {
    linkedListQueue2.dequeue();
}
for (var i = 0; i < 10000; i++) {
    linkedListQueue2.enqueue(i);
}
for (var i = 0; i < 15000; i++) {
    linkedListQueue2.dequeue();
}
console.timeEnd('LinkedListQueue second');
