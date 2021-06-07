import {Person} from "../../../exercises/dataStructures/exercise2/src/Person";

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

    constructor(person: string) {
        this._person = person;
    }
}

class Queue {

    _array: PeopleQueue[] = []
    private list = new LinkedQueueList();

    enqueue(person: PeopleQueue) {
        this._array.push(person);
    }

    dequeue(): PeopleQueue | undefined {
        return this._array.shift();
    }
}

const first = new PeopleQueue('Juan')
Queue.enqueue()
const second = new PeopleQueue('Pedro')

