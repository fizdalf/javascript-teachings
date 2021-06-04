class LinkedQueueList {
    private _firstPersonInQueue: any;
    get peopleQueue(): any {
        return this._firstPersonInQueue;
    }

    constructor(head = null) {
        this._firstPersonInQueue = head
    }

    getLast() {
        let lastPerson = this._firstPersonInQueue;
        if (lastPerson) {
            while (lastPerson.next) {
                lastPerson = lastPerson.next;
            }
        }
        return lastPerson;
    }

    size() {
        let count = 0;
        let person = this._firstPersonInQueue;
        while (person) {
            count++;
            person = person.next;
        }
        return count;
    }
}

class PeopleQueue {
    private _person;

    public next: PeopleQueue = null;

    constructor(person: any) {
        this._person = person;
    }
}

class Queue {

    private list = new LinkedQueueList();

    enqueue(element: number) {

    }

    dequeue(): number | undefined {
        return 1;
    }
}