import {Person} from './Person';

export class CinemaBooth {
    private _personQueue: PersonQueue = new PersonQueue();
    private _ticketProcessTime: number = 2;
    private _currentTime = 0;
    private _onPersonWithTicket: (person: Person) => void = () => null;
    private _onPersonLeftWithoutTicket: (person: Person) => void = () => null;


    timeTick() {
        this._personQueue.incrementTime();
        const leavePeople = this._personQueue.removePeople();
        leavePeople.forEach(x => this._onPersonLeftWithoutTicket(x));
        this._currentTime++;

        if (this._currentTime >= this._ticketProcessTime) {
            this._currentTime = 0;
            const ticketPerson = this._personQueue.dequeue();
            if (ticketPerson) {
                this._onPersonWithTicket(ticketPerson);
            }
        }
    }

    addPersonWaiting(person: Person) {
        this._personQueue.enqueue(person); // personQueue => [Manuel]
    }

    personLeftWithoutTicket(fn: (person: Person) => void) {
        this._onPersonLeftWithoutTicket = fn;
    }

    personWithTicket(fn: (person: Person) => void) {
        this._onPersonWithTicket = fn; // person => { console.log(`${person.name} left with a ticket!`); }
    }
}

export class PersonQueue {
    private _array: Person[] = [];

    enqueue(person: Person) {
        this._array.push(person);
    }

    dequeue(): Person | undefined {
        return this._array.shift();
    }

    isEmpty(): boolean {
        return Boolean(this._array.length);
    }

    length(): number {
        return this._array.length;
    }
    
    incrementTime() {
        this._array.forEach(e => e.incrementWaitingTime());
    }

    removePeople(): Person[] {
        const leavingPeople: Person[] = [];
        this._array = this._array.filter((person, index) => {
            if (index == 0) {
                return true;
            }

            if (!person.shouldLeave()) {
                return true;
            }

            leavingPeople.push(person);
            return false;
        })
        return leavingPeople;
    }
}


const manuel = new Person('Manuel', 1);
const juana = new Person('Juana', 2);
const sergio = new Person('Sergio', 5);
const luismi = new Person('Luismi', 8);
const joselito = new Person('Joselito', 50);
const Paco = new Person('Paco', 0);

const cinemaBooth = new CinemaBooth();

cinemaBooth.addPersonWaiting(manuel);
cinemaBooth.addPersonWaiting(juana);
cinemaBooth.personWithTicket(person => {
    console.log(`${person.name} left with a ticket!`);
})
cinemaBooth.personLeftWithoutTicket(person => {
    console.log(`${person.name} left WITHOUT a ticket!`);
})
cinemaBooth.timeTick(); // "Juana left WITHOUT a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(luismi);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(sergio);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(Paco);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.addPersonWaiting(joselito);
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
