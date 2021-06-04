class Stack {

    private list = new buffetPlates();

    push(element: number) {

    }

    pop(): number | undefined {
        return 1;
    }
}
class buffetPlates {
    private topPlate: any;
    get plates(): any {
        return this.topPlate;
    }

    constructor(head = null) {
        this.topPlate = head
    }

    getLast() {
        let lastPlate = this.topPlate;
        if (lastPlate) {
            while (lastPlate.next) {
                lastPlate = lastPlate.next;
            }
        }
        return lastPlate;
    }

    size() {
        let totalAmount = 0;
        let plate = this.topPlate;
        while (plate) {
            totalAmount++;
            plate = plate.next;
        }
        return totalAmount;
    }
}
