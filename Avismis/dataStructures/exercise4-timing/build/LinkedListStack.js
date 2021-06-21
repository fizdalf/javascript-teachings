"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListStack = void 0;
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
exports.LinkedListStack = LinkedListStack;
