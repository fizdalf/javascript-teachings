"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayQueue = void 0;
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.array = [];
    }
    ArrayQueue.prototype.enqueue = function (element) {
        this.array.push(element);
    };
    ArrayQueue.prototype.dequeue = function () {
        return this.array.shift();
    };
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;
