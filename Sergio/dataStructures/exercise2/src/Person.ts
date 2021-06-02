export class Person {
    private _waitingTime: number = 0;

    constructor(private _name: string, private _waitingCapacity: number) {

    }

    get waitingTime(): number {
        return this._waitingTime;
    }

    get name(): string {
        return this._name;
    }

    get waitingCapacity(): number {
        return this._waitingCapacity;
    }

    incrementWaitingTime() {
        this._waitingTime++;
    }

    shouldLeave() {
        return this.waitingTime > this.waitingCapacity;
    }
}
