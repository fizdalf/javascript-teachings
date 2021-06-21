"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_linkedList_timing_1 = require("./queue.linkedList.timing");
var linkedQueue = new queue_linkedList_timing_1.LinkedListQueue();
for (var i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i);
}
for (var i = 10000; i >= 10000; i--) {
    linkedQueue.dequeue();
}
