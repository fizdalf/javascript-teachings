"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_timing_1 = require("./queue.timing");
var queue_linkedList_timing_1 = require("./queue.linkedList.timing");
var arrayQueue = new queue_timing_1.Queue();
var linkedQueue = new queue_linkedList_timing_1.LinkedListQueue();
console.time('Queue with array, first scenario');
for (var i = 0; i < 10000; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 10000; i >= 10000; i--) {
    arrayQueue.dequeue();
}
console.timeEnd('Queue with array, first scenario');
console.time('Queue with linkedList, first scenario');
for (var i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 10000; i >= 10000; i--) {
    linkedQueue.dequeue();
}
console.timeEnd('Queue with linkedList, first scenario');
console.time('Queue with array, second scenario');
for (var i = 0; i <= 10000; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 10000; i > 5000; i--) {
    arrayQueue.dequeue();
}
for (var i = 5000; i <= 10000; i++) {
    arrayQueue.enqueue(i);
}
for (var i = 15000; i <= 15000; i--) {
    arrayQueue.dequeue();
}
console.timeEnd('Queue with array, second scenario');
console.time('Queue with linkedList, second scenario');
for (var i = 0; i <= 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 10000; i > 5000; i--) {
    linkedQueue.dequeue();
}
for (var i = 5000; i <= 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 15000; i <= 15000; i--) {
    linkedQueue.dequeue();
}
console.timeEnd('Queue with linkedList, second scenario');
