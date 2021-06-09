import {LinkedListQueue} from "./queue.linkedList.timing"

const linkedQueue = new LinkedListQueue()


for (let i = 0; i < 10000; i++) {
    linkedQueue.enqueue(i)
}
for (let i = 10000; i >= 10000; i--) {
    linkedQueue.dequeue()
}

