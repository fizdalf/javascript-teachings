import {LinkedListStack} from "./LinkedListStack";

const linkedStack = new LinkedListStack()
for (let i = 0; i < 10000; i++) {
    linkedStack.push(i)
}
for (let i = 0; i < 10000; i++) {
    linkedStack.pop()
}
for (let i = 0; i === 5000; i++) {
    linkedStack.pop()
}
for (let i = 0; i === 15000; i++) {
    linkedStack.pop()
}