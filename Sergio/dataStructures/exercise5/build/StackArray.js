"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this._array = [];
    }
    Stack.prototype.push = function (element) {
        this._array.push(element);
    };
    Stack.prototype.pop = function () {
        return this._array.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
for (var i = 0; i < 10000; i++) {
    stack.push(i);
}
for (var i = 0; i < 10000; i++) {
    stack.pop();
}
for (var i = 0; i < 5000; i++) {
    stack.pop();
}
for (var i = 0; i < 15000; i++) {
    stack.pop();
}
