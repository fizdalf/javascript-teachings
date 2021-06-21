"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListStack_1 = require("./LinkedListStack");
var ArrayStack_1 = require("./ArrayStack");
console.time('ArrayStack first');
var arrayStack = new ArrayStack_1.ArrayStack();
for (var i = 0; i < 10000; i++) {
    arrayStack.push(i);
}
for (var i = 0; i < 10000; i++) {
    arrayStack.pop();
}
console.timeEnd('ArrayStack first');
console.time('LinkedListStack first');
var linkedListStack = new LinkedListStack_1.LinkedListStack();
for (var i = 0; i < 10000; i++) {
    linkedListStack.push(i);
}
for (var i = 0; i < 10000; i++) {
    linkedListStack.pop();
}
console.timeEnd('LinkedListStack first');
// Insert 10k elements, remove 5k elements, insert 10k elements, remove 15k elements
console.time('ArrayStack second');
var arrayStack2 = new ArrayStack_1.ArrayStack();
for (var i = 0; i < 10000; i++) {
    arrayStack2.push(i);
}
for (var i = 0; i < 5000; i++) {
    arrayStack2.pop();
}
for (var i = 0; i < 10000; i++) {
    arrayStack2.push(i);
}
for (var i = 0; i < 15000; i++) {
    arrayStack2.pop();
}
console.timeEnd('ArrayStack second');
console.time('LinkedListStack second');
var linkedListStack2 = new LinkedListStack_1.LinkedListStack();
for (var i = 0; i < 10000; i++) {
    linkedListStack2.push(i);
}
for (var i = 0; i < 5000; i++) {
    linkedListStack2.pop();
}
for (var i = 0; i < 10000; i++) {
    linkedListStack2.push(i);
}
for (var i = 0; i < 15000; i++) {
    linkedListStack2.pop();
}
console.timeEnd('LinkedListStack second');
