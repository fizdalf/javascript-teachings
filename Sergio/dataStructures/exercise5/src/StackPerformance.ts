import {Stack} from "./StackArray";
import {LinkedListStack} from "./LinkedListStack";
const stack = new Stack()
const linkedStack = new LinkedListStack()

// scenario 1
console.time('Stack with array, first scenario');
for (let i = 0; i < 10000; i++) {
    stack.push(i)
}
for (let i = 0; i < 10000; i++) {
    stack.pop()
}
console.timeEnd('Stack with array, first scenario');

console.time('Stack with linkedList, first scenario');
for (let i = 0; i < 10000; i++) {
    linkedStack.push(i)
}
for (let i = 0; i < 10000; i++) {
    linkedStack.pop()
}
console.timeEnd('Stack with linkedList, first scenario');



// scenario 2
console.time('Stack with array, second scenario');
for (let i = 0; i < 10000; i++) {
    stack.push(i)
}
for (let i = 0; i < 5000; i++) {
    stack.pop()
}
for (let i = 0; i < 10000; i++) {
    stack.push(i)
}
for (let i = 0; i < 15000; i++) {
    stack.pop()
}
console.timeEnd('Stack with array, second scenario');

console.time('Stack with linkedList, second scenario');
for (let i = 0; i < 10000; i++) {
    linkedStack.push(i)
}
for (let i = 0; i < 5000; i++) {
    linkedStack.pop()
}
for (let i = 0; i < 10000; i++) {
    stack.push(i)
}
for (let i = 0; i < 15000; i++) {
    linkedStack.pop()
}
console.timeEnd('Stack with linkedList, second scenario');