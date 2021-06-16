"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackArray_1 = require("./StackArray");
var LinkedListStack_1 = require("./LinkedListStack");
var stack = new StackArray_1.Stack();
var linkedStack = new LinkedListStack_1.LinkedListStack();
// scenario 1
console.time('Stack with array, first scenario');
for (var i = 0; i < 10000; i++) {
    stack.push(i);
}
for (var i = 0; i < 10000; i++) {
    stack.pop();
}
console.timeEnd('Stack with array, first scenario');
console.time('Stack with linkedList, first scenario');
for (var i = 0; i < 10000; i++) {
    linkedStack.push(i);
}
for (var i = 0; i < 10000; i++) {
    linkedStack.pop();
}
console.timeEnd('Stack with linkedList, first scenario');
// scenario 2
console.time('Stack with array, second scenario');
for (var i = 0; i < 10000; i++) {
    stack.push(i);
}
for (var i = 0; i < 5000; i++) {
    stack.pop();
}
for (var i = 0; i < 10000; i++) {
    stack.push(i);
}
for (var i = 0; i < 15000; i++) {
    stack.pop();
}
console.timeEnd('Stack with array, second scenario');
console.time('Stack with linkedList, second scenario');
for (var i = 0; i < 10000; i++) {
    linkedStack.push(i);
}
for (var i = 0; i < 5000; i++) {
    linkedStack.pop();
}
for (var i = 0; i < 10000; i++) {
    stack.push(i);
}
for (var i = 0; i < 15000; i++) {
    linkedStack.pop();
}
console.timeEnd('Stack with linkedList, second scenario');
