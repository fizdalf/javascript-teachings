"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayStack_1 = require("./ArrayStack");
var LinkedListStack_1 = require("./LinkedListStack");
var arrayStack = new ArrayStack_1.Stack();
var linkedStack = new LinkedListStack_1.LinkedListStack();
console.time('Stack with array, first scenario');
for (var i = 0; i < 10000; i++) {
    arrayStack.push(i);
}
for (var i = 0; i < 10000; i++) {
    arrayStack.pop();
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
console.time('Stack with array, second scenario');
for (var i = 0; i < 10000; i++) {
    arrayStack.push(i);
}
for (var i = 0; i < 5000; i++) {
    arrayStack.pop();
}
for (var i = 0; i < 10000; i++) {
    arrayStack.push(i);
}
for (var i = 0; i < 15000; i++) {
    arrayStack.pop();
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
    linkedStack.push(i);
}
for (var i = 0; i < 15000; i++) {
    linkedStack.pop();
}
console.timeEnd('Stack with linkedList, second scenario');
