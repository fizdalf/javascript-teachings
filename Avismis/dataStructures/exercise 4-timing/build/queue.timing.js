"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this._array = [];
    }
    Queue.prototype.enqueue = function (element) {
        this._array.push(element);
    };
    Queue.prototype.dequeue = function () {
        return this._array.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue();
for (var i = 0; i < 10000; i++) {
    queue.enqueue(i);
}
for (var i = 0; i < 10000; i++) {
    queue.dequeue();
}
for (var i = 0; i < 5000; i++) {
    queue.dequeue();
}
for (var i = 0; i < 15000; i++) {
    queue.dequeue();
}
