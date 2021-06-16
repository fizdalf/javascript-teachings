"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListStack_1 = require("./LinkedListStack");
var linkedStack = new LinkedListStack_1.LinkedListStack();
for (var i = 0; i < 10000; i++) {
    linkedStack.push(i);
}
for (var i = 0; i < 10000; i++) {
    linkedStack.pop();
}
for (var i = 0; i < 5000; i++) {
    linkedStack.pop();
}
for (var i = 0; i < 15000; i++) {
    linkedStack.pop();
}
