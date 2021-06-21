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
    Queue.prototype.size = function () {
        return this._array.length;
    };
    return Queue;
}());
exports.Queue = Queue;
