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
}

class Stack {

    private list = new LinkedStackList();

    push(element: number) {

    }

    pop(): number | undefined {
        return 1;
    }
}

function testing() {


    const first = new PanquequesList('Primer Panqueque');
    const second = new PanquequesList('Segundo Panqueque');
    const third = new PanquequesList('Tercer Panqueque')
    const fourth = new PanquequesList('Cuarto Panqueque')


    first.next = second;
    second.next = third;
    third.next = fourth;
    const list = new LinkedStackList(first);

    list.panqueques.next
}