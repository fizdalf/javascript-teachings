class LinkedStackList {
    private _firstpanqueque: any;
    get panqueques(): any {
        return this._firstpanqueque;
    }

    constructor(head = null) {
        this._firstpanqueque = head
    }

    getLast() {
        let lastPanqueque = this._firstpanqueque;
        if (lastPanqueque) {
            while (lastPanqueque.next) {
                lastPanqueque = lastPanqueque.next;
            }
        }
        return lastPanqueque;
    }

    size() {
        let count = 0;
        let panqueque = this._firstpanqueque;
        while (panqueque) {
            count++;
            panqueque = panqueque.next;
        }
        return count;
    }
}

class PanquequesList {
    private _Panqueque;

    public next: PanquequesList = null;

    constructor(panqueque: any) {
        this._Panqueque = panqueque;
    }

    cookPanqueque(stack: Stack){
        stack.push('Panqueque')
    }

    eatPanqueque(stack: Stack){
        stack.pop()
    }
}

class Stack {
    private _array: any[];
    private list = new LinkedStackList();

    constructor() {
        this._array = [];
    }

    push(element: string) {
        this._array.push(element);
    }

    pop(): string {
        return this._array.pop();
    }
}

function testing() {


    const first = new PanquequesList('Panqueque');
    const second = new PanquequesList('Panqueque');
    const third = new PanquequesList('Panqueque')
    const fourth = new PanquequesList('Panqueque')


    first.next = second;
    second.next = third;
    third.next = fourth;
    const list = new LinkedStackList(first);


    list.panqueques.next
}