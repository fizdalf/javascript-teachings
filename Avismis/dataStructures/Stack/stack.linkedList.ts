class ListNode {
    public next: ListNode;
    public value: number

    constructor(value: number) {
        this.value = value;
    }
}


export class LinkedListStack {
    first: ListNode = null;

    push(element: number) {
        let temp = null;
        if (this.first) {
            temp = this.first;
        }
        this.first = new ListNode(element);
        this.first.next = temp;
    }

    pop(): number {
        if (!this.first) {
            return null;
        }

        const temp = this.first;
        this.first = this.first.next;
        return temp.value;
    }
}
