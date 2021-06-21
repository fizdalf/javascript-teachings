"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayQueue_1 = require("./ArrayQueue");
var LinkedListQueue_1 = require("./LinkedListQueue");
var arrayQueue = new ArrayQueue_1.Queue();
var linkedQueue = new LinkedListQueue_1.LinkedListQueue();
var number = 10000;
console.time('Queue with array, first scenario');
for (var i = 0; i < number; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 0; i < number; i++) {
    arrayQueue.size();
}
console.timeEnd('Queue with array, first scenario');
console.time('Queue with linkedList, first scenario');
for (var i = 0; i < number; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 0; i < number; i++) {
    linkedQueue.size();
}
console.timeEnd('Queue with linkedList, first scenario');
console.time('Queue with array, second scenario');
for (var i = 0; i < number; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 0; i < number * 0.5; i++) {
    arrayQueue.dequeue();
}
for (var i = 0; i < number; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 0; i < number * 1.5; i++) {
    arrayQueue.dequeue();
}
console.timeEnd('Queue with array, second scenario');
console.time('Queue with linkedList, second scenario');
for (var i = 0; i < number; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 0; i < number * 0.5; i++) {
    linkedQueue.dequeue();
}
for (var i = 0; i < number; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 0; i < number * 1.5; i++) {
    linkedQueue.dequeue();
}
console.timeEnd('Queue with linkedList, second scenario');
