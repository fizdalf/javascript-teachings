"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListQueue = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this._data = data;
    }
    Object.defineProperty(ListNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ListNode;
}());
var LinkedListQueue = /** @class */ (function () {
    function LinkedListQueue() {
    }
    LinkedListQueue.prototype.enqueue = function (element) {
        if (this.tail) {
            var newNode = new ListNode(element);
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        this.head = new ListNode(element);
        this.tail = this.head;
    };
    LinkedListQueue.prototype.dequeue = function () {
        if (this.head) {
            var data = this.head.data;
            this.tail = this.head.next;
            this.head = this.head.next;
            return data;
        }
        return null;
    };
    LinkedListQueue.prototype.size = function () {
        var count = 0;
        if (this.head) {
            count++;
            var nextNode = this.head;
            while (nextNode.next) {
                count++;
                nextNode = nextNode.next;
            }
        }
        return count;
    };
    return LinkedListQueue;
}());
exports.LinkedListQueue = LinkedListQueue;
