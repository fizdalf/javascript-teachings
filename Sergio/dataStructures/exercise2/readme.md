Create a class to handle a cinema ticket booth, the class must provide the following methods, use Stack or Queue in your
implementation

- timeTick() This method will simulate the pass of time, in increments of 1 minute
- addPersonWaiting(person: Person) This method will add a person waiting to be given a ticket, with their name and how
  much time in minutes are they willing to wait till they get a ticket
- personLeftWithoutTicket((person:Person) => {}) This method will receive a function, this function will be called every
  time a person leaves without a ticket
- personWithTicket((person:Person) => {}) This method will receive a function, this function will be called every time a
  person leaves WITH a ticket

Everytime the time ticks, each person waiting will have their waitingTime incremented by 1 minute, if the waiting time
is greater than their waitingCapacity they will leave without a ticket, and the corresponding function should be called.
We can only produce one ticket every two minutes, people that is getting a ticket won't leave without it! So if they are
already at the booth, they won't leave if they've been waiting longer than their waitingCapacity. Once the person has
the ticket they can leave with a ticket, and the corresponding function should be called

Execution example

```javascript
const manuel = new Person('Manuel', 1);

const cinemaBooth = new CinemaBooth();

cinemaBooth.addPersonWaiting(manuel);
cinemaBooth.personWithTicket(person => {
    console.log(`${person.name} left with a ticket!`);
})
cinemaBooth.timeTick();
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
```

Execution Example 2

```javascript
const manuel = new Person('Manuel', 1);
const juana = new Person('Juana', 1);

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
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
```

Execution Example 3

```javascript
const manuel = new Person('Manuel', 1);
const juana = new Person('Juana', 1);
const samuel = new Person('Samuel', 3);

const cinemaBooth = new CinemaBooth();

cinemaBooth.addPersonWaiting(manuel);
cinemaBooth.addPersonWaiting(juana);
cinemaBooth.addPersonWaiting(samuel);
cinemaBooth.personWithTicket(person => {
    console.log(`${person.name} left with a ticket!`);
})
cinemaBooth.personLeftWithoutTicket(person => {
    console.log(`${person.name} left WITHOUT a ticket!`);
})
cinemaBooth.timeTick(); // "Juana left WITHOUT a ticket!" is printed in the terminal
cinemaBooth.timeTick(); // "Manuel left with a ticket!" is printed in the terminal
cinemaBooth.timeTick();
cinemaBooth.timeTick(); // "Samuel left with a ticket!" is printed in the terminal
```
