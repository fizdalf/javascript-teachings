"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_timing_1 = require("./stack.timing");
var stack_linkedList_timing_1 = require("./stack.linkedList.timing");
var arrayStack = new stack_timing_1.Stack();
var linkedStack = new stack_linkedList_timing_1.LinkedListStack();
console.time('Stack with array, first scenario');
for (var i = 0; i < 10000; i++) {
    arrayStack.push(i);
}
for (var i = 10000; i >= 10000; i--) {
    arrayStack.pop();
}
console.timeEnd('Stack with array, first scenario');
console.time('Stack with linkedList, first scenario');
for (var i = 0; i < 10000; i++) {
    linkedStack.push(i);
}
for (var i = 10000; i >= 10000; i--) {
    linkedStack.pop();
}
console.timeEnd('Stack with linkedList, first scenario');
console.time('Stack with array, second scenario');
for (var i = 0; i <= 10000; i++) {
    arrayStack.push(i);
}
for (var i = 10000; i > 5000; i--) {
    arrayStack.pop();
}
for (var i = 5000; i <= 10000; i++) {
    arrayStack.pop();
}
for (var i = 15000; i <= 15000; i--) {
    arrayStack.pop();
}
console.timeEnd('Stack with array, second scenario');
console.time('Stack with linkedList, second scenario');
for (var i = 0; i <= 10000; i++) {
    linkedStack.push(i);
}
for (var i = 10000; i > 5000; i--) {
    linkedStack.pop();
}
for (var i = 5000; i <= 10000; i++) {
    linkedStack.pop();
}
for (var i = 15000; i <= 15000; i--) {
    linkedStack.pop();
}
console.timeEnd('Stack with linkedList, second scenario');
