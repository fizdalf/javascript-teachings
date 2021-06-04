class Stack {

    private list = new buffetPlates();

    plates = []

    push(element: number) {
        this.plates.push(element);
    }

    pop(): undefined {
        const stackOfPlates = this.plates[this.plates.length - 1];
        this.plates() = this.plates.filter((element, index) => {
            return index !== this.plates.length - 1;
        });
        console.log(this.plates);
        return stackOfPlates;
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
