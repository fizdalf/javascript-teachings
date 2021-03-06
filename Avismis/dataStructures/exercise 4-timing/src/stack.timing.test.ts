import {Stack} from "./stack.timing";
import {LinkedListStack} from "./stack.linkedList.timing";
const arrayStack = new Stack()
const linkedStack = new LinkedListStack()


console.time('Stack with array, first scenario');
for (let i = 0; i < 10000; i++) {
    arrayStack.push(i)
}
for (let i = 10000; i >= 10000; i--) {
    arrayStack.pop()
}

console.timeEnd('Stack with array, first scenario');

console.time('Stack with linkedList, first scenario');
for (let i = 0; i < 10000; i++) {
    linkedStack.push(i)
}
for (let i = 10000; i >= 10000; i--) {
    linkedStack.pop()
}

console.timeEnd('Stack with linkedList, first scenario');



console.time('Stack with array, second scenario');
for (let i = 0; i <= 10000; i++) {
    arrayStack.push(i)
}
for (let i = 10000; i > 5000; i--) {
    arrayStack.pop()
}
for (let i = 5000; i <= 10000; i++) {
    arrayStack.pop()
}
for (let i = 15000; i <= 15000; i--) {
    arrayStack.pop()
}
console.timeEnd('Stack with array, second scenario');

console.time('Stack with linkedList, second scenario');
for (let i = 0; i <= 10000; i++) {
    linkedStack.push(i)
}
for (let i = 10000; i > 5000; i--) {
    linkedStack.pop()
}
for (let i = 5000; i <= 10000; i++) {
    linkedStack.pop()
}
for (let i = 15000; i <= 15000; i--) {
    linkedStack.pop()
}
console.timeEnd('Stack with linkedList, second scenario');