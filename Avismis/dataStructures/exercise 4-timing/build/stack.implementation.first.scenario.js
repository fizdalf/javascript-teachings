"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_linkedList_timing_1 = require("./stack.linkedList.timing");
var linkedStack = new stack_linkedList_timing_1.LinkedListStack();
for (var i = 0; i < 10000; i++) {
    linkedStack.push(i);
}
for (var i = 10000; i >= 10000; i--) {
    linkedStack.pop();
}
