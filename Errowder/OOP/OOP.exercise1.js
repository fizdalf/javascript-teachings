//Create a class

class motorVehicle {
    maxSpeed = 200
    fuel = "Gasoline"
    price = 35000
    wheels = 4
    travelByRoad = true
}

class car extends motorVehicle {
    seatBelt = true
    doors = 5
}

class convertible extends car {
    maxSpeed = 350
    doors = 3
    price = 135000
}

class truck extends car {
    maxSpeed = 100
    wheels = 8
}

class motorcycle extends motorVehicle {
    wheels = 2
    fuel = "Diesel"
}

class motorboat extends motorVehicle {
    maxSpeed = 500
    price = 500000
    wheels = 0
    travelByRoad = false
}


class speedMutations {
    applySpeedVariation(objetive){
    }
}

class nitrousOxide extends speedMutations {
    applySpeedVariation(objetive) {
        objetive.maxSpeed *= 2
    }
}

class overload extends speedMutations {
    applySpeedVariation(objetive) {
        objetive.maxSpeed /= 2
    }
}


const vehicle = new motorboat
const velocity = new overload()
velocity.applySpeedVariation(vehicle)
console.log(vehicle)