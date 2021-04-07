const Ticket = function (dateTime, event, seat, price, ticketHolderName, id) {
    return {
        dateTime,
        event,
        ticketHolderName,
        id,
        seat,
        price,
    }
}


const Event = function (eventName, ticketPrice, dateTime, durationInMinutes, venueCapacity) {
    const occupiedSeats = new Map();
    const ticketHolders = new Map();

    function checkTicketBoughtBy(name) {
        const lowerCaseName = name.toLowerCase();
        if (ticketHolders.has(lowerCaseName)) {
            throw Error('Ya tienes un ticket, guarre')
        }
        ticketHolders.set(lowerCaseName, 'guarre');
    }

    return {
        eventName,
        ticketPrice,
        dateTime,
        durationInMinutes,
        venueCapacity,
        getTicket: function (seatNumber, ticketHolderName) {
            if (seatNumber > venueCapacity || seatNumber <= 0) {
                throw Error('No existe el asiento solicitado, cerde');
            }
            // seatNumber is a valid seat number ...
            if (occupiedSeats.has(seatNumber)) {
                throw Error('Este asiento está ocupado, cerde');
            }

            checkTicketBoughtBy(ticketHolderName);
            // seatNumber is not occupied
            occupiedSeats.set(seatNumber, ticketHolderName);

            return Ticket(
                this.dateTime,
                this.eventName,
                seatNumber,
                this.ticketPrice,
                ticketHolderName,
                eventName + "-" + seatNumber
            );
        },
        getSeats() {
            const seats = []
            for (let i = 1; i <= venueCapacity; i++) {
                let text = "[ ]";
                if (occupiedSeats.has(i)) {
                    text = "[X]";
                }
                seats.push(text)
            }
            return seats;
        }
    }
}

const laRamita = Event('La Ramita de Hierbabuena', 0, '2021-04-11 18:00:00', 60, 100);


const ticket1 = laRamita.getTicket(69, "Xavi Gonzalez");
const ticket2 = laRamita.getTicket(1, "Xavi Gasdfonzalez");
const ticket3 = laRamita.getTicket(100, "Xavi Gonfasdfzalez");
console.log(ticket1);
// const ticket2 = laRamita.getTicket(68, "Xavi gónzalez");/
// console.log(ticket2);
console.log(laRamita.getSeats());
// [ ] [X] [ ] [ ]
