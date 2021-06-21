"use strict";
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.next = null;
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
var LinkedListStack = /** @class */ (function () {
    function LinkedListStack() {
    }
    LinkedListStack.prototype.push = function (element) {
        if (this.head) {
            var newHead = new ListNode(element);
            newHead.next = this.head;
            this.head = newHead;
            return;
        }
        this.head = new ListNode(element);
    };
    LinkedListStack.prototype.pop = function () {
        if (this.head) {
            var data = this.head.data;
            this.head = this.head.next;
            return data;
        }
        return null;
    };
    return LinkedListStack;
}());
var stack = new LinkedListStack();
console.log(stack.pop());
stack.push('violeta');
console.log(stack.pop());
stack.push('violeta');
stack.push('amarillo');
console.log(stack.pop());
stack.push('azul');
stack.push('marrón');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
