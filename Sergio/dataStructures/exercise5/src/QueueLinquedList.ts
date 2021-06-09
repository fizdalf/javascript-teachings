import {LinkedListQueue} from "./LinkedListQueue";

const linkedQueue = new LinkedListQueue()
for (let i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i)
}
for (let i = 0; i < 10000; i++) {
    linkedQueue.dequeue()
}
for (let i = 0; i === 5000; i++) {
    linkedQueue.dequeue()
}
for (let i = 0; i === 15000; i++) {
    linkedQueue.dequeue()
}