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
    return LinkedListQueue;
}());
exports.LinkedListQueue = LinkedListQueue;
// const myQueue = new LinkedListQueue();
//
// console.log(myQueue.dequeue());
// myQueue.enqueue('verde');
// console.log(myQueue.dequeue());
// myQueue.enqueue('verde');
// myQueue.enqueue('naranja');
// console.log(myQueue.dequeue());
// const myQueue2 = new LinkedListQueue();
// myQueue2.enqueue('verde');
// myQueue2.enqueue('naranja');
// myQueue2.enqueue('rojo');
// console.log(myQueue2.dequeue(), myQueue2.dequeue(), myQueue2.dequeue());
//
//
// meter 10000, sacar 10000
// queue con array
// queue con linkedList
// meter 10000, sacar 5000, meter 10000, sacar 15000
// queue con array
// queue con linkedList
console.time('Queue with array');
console.timeEnd('Queue with array');
for (var i = 0; i < 1; i++) {
    console.log('test');
}
console.time('Queue with array enqueue 10k elements dequeue 10k elements');
Array(50000).fill(0);
console.timeEnd('Queue with array enqueue 10k elements dequeue 10k elements');
