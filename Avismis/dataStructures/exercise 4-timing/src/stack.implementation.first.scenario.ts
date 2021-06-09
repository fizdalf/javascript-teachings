import {LinkedListStack} from "./stack.linkedList.timing";

const linkedStack = new LinkedListStack()

for (let i = 0; i < 10000; i++) {
    linkedStack.push(i)
}
for (let i = 10000; i >= 10000; i--) {
    linkedStack.pop()
}
