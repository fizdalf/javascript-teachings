class LinkedList {
    private _head: any;
    private _tail: any;
    get head(): any {
        return this._head;
    }

    constructor(head = null) {
        this._head = head
    }

    clear() {
        this._head = null;
    }

    getLast() {
        let lastNode = this._head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this._head;
    }

    size() {
        let count = 0;
        let node = this._head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}


class ListNode {
    private _data;

    public next: ListNode = null;

    constructor(data: any) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}

class NumberStack {

    private myList = new LinkedList();

    push(element: number) {

    }

    pop(): number | undefined {
        return 1;
    }
}

function testing() {


    const first = new ListNode('Xavi');
    const second = new ListNode('Luismi');
    const third = new ListNode('Sergio');

    first.next = second
    second.next = third;
    const myList = new LinkedList(first);

    myList.head.next
}
export {LinkedList, ListNode}
