class ListNode {
    private _data;

    public next: ListNode | null = null;

    constructor(data: any) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}

class LinkedListStack {

    private head: ListNode | null | undefined; //ListNode(element)

    push(element: any) {
        if (this.head) {
            const newHead = new ListNode(element);
            newHead.next = this.head;
            this.head = newHead;
            return;
        }
        this.head = new ListNode(element);
    }

    pop(): any {
        if (this.head) {
            const data = this.head.data;
            this.head = this.head.next;
            return data;
        }
        return null;
    }
}

const stack = new LinkedListStack();
console.log(stack.pop())
stack.push('violeta');
console.log(stack.pop());
stack.push('violeta');
stack.push('amarillo');
console.log(stack.pop());
stack.push('azul');
stack.push('marrón');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

