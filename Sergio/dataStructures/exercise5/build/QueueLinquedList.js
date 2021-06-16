"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListQueue_1 = require("./LinkedListQueue");
var linkedQueue = new LinkedListQueue_1.LinkedListQueue();
for (var i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 0; i < 10000; i++) {
    linkedQueue.dequeue();
}
for (var i = 0; i < 5000; i++) {
    linkedQueue.dequeue();
}
for (var i = 0; i < 15000; i++) {
    linkedQueue.dequeue();
}
