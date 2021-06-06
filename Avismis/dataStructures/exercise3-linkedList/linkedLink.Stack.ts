import {LinkedList, ListNode} from "../../../dataStructures/linkedList/linkedList";

class Stack {

    private collection = new LinkedList();

    push(element: any) {
        let first = this.collection.head()
        let newFirst = new ListNode(element)
        newFirst.next = first
        this.collection = new LinkedList(newFirst)
    }

    pop(): any {
        const stackOfPlates = this.collection[this.collection.length - 1];
        this.collection = this.collection.filter((element, index) => {
            return index !== this.collection.length - 1;
        });
        console.log(this.collection);
        return stackOfPlates;
    }
}

