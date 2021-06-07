class PanquequesMarcket {
    private _firstpanqueque: any;
    get panqueques(): any {
        return this._firstpanqueque;
    }

    constructor(firstpanqueque = null) {
        this._firstpanqueque = firstpanqueque
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
        stack = new PanquequesMarcket("Panqueque").getLast()
        stack.pop()
    }
}

class Stack {
    private list: PanquequesMarcket = new PanquequesMarcket();

    push(element: string) {

    }

    pop(): string {
        return ""
    }
}

function testing() {


    const first = new PanquequesList("Panqueque 1").cookPanqueque(new Stack)
    const second = new PanquequesList("Panqueque 2").cookPanqueque(new Stack)
    const third = new PanquequesList("Panqueque 3").cookPanqueque(new Stack)
    const fourth = new PanquequesList("Panqueque 4").cookPanqueque(new Stack)


    const list = new PanquequesMarcket(first);


    list.panqueques.next
}