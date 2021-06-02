import {Person} from './Person';

export class CinemaBooth {
    waiting = new Map()

    timeTick(){
        let time = "0 min"
        for(let minutes = 0; minutes; minutes++){
            time = minutes + " min"
            if(minutes > 20){
                console.log('lo siento pero se va sin ticket señor')
            }
        } return time
    }

    addPersonWaiting(person: Person) { this.waiting.set(person.name, person) }

    personLeftWithoutTicket(fn: (person: Person) => void) {

    }

    personWithTicket(fn: (person: Person) => void) {
    }
}
