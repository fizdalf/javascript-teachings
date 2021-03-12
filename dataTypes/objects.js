let test = "hola";

let drivingsLicense = {
    name: "Manuel",
    expiryDate: "27/02/2024",
    vehicles: ["cars", "trucks", "motorcylces"],
    team: 5271,
    invalidate: function (arg) {
        this.expiryDate = '08/03/2021';
    }
};

drivingsLicense["name"] = 'Juanito';
drivingsLicense['points'] = 10;
drivingsLicense.team = 23423;
drivingsLicense.invalidate();

console.log(drivingsLicense);

let tvChannel = {
    scheduleStart: 12,
    scheduleEnd: 20,
    logo: '/resources/logo.jpg',
    name: 'TeleAntena',
    frequency: '532Mhz',
    advertisementSpaces: [
        {
            start: 10,
            end: 11,
            cost: 1000,
            advertiser: 'CocaCola'
        },
        {
            start: 11,
            end: 12,
            cost: 3000,
            advertiser: "Viagra"
        }
    ],
    emitting: false,
    changeLogo: function (logoFile) {
        this.logo = logoFile;
    },
    startEmission: function () {
        this.emitting = true;
    },
    changeAdvertiser: function (previousAdvertiser, newAdvertiser) {
        // implementation
    },
    getAdvertisementProfit: function () {
        return this.advertisementSpaces.reduce((acc, adv) => acc + adv.cost, 0);
    }
}

tvChannel.changeLogo('/resources/logo2.jpg');
console.log(tvChannel.getAdvertisementProfit());
console.log(tvChannel);

let car = {
    color: 'blue',
    licensePlateNumber: '8156GCS',
    power: 300,
    brand: 'Ford',
    typeOfGas: 'Diesel',
    isEngineStarted: false,
    startEngine: function () {
        this.isEngineStarted = true;
    },
    areLightsOn: false,
    provideLightLevelValue: function (lightLevel) {
        if (lightLevel < 30) {
            this.areLightsOn = true;
        }
    },
    velocity: 0,
    accelerate: function () {
        this.velocity++;
    },
    paintCar: function (color) {
        this.color = color;
    },
    addEngineMod: function (engine) {
        if (this.isEngineStarted) {
            throw new Error('You cannot change the engine while the car is running!!!');
        }
        this.power = engine.power;
        this.typeOfGas = engine.typeOfGas;
    },
    ducks: ['donald', 'lucas'],
}

car.addEngineMod({engineModel: 'Mamarrasho', power: 100, typeOfGas: 'electric'});

let number = 4;
let number2 = 4;
const isTrue = number === number2;

let banana = [1, 2, 3];
let banana3 = banana;
let banana2 = [1, 2, 3];
banana2.push(1);
const something = "hola";
const something2 = "hola";
const itIsTrue = something === something2;
something.length;
something.toLowerCase();
if (banana === banana2) {
    console.log('it is the same!');
} else {
    console.log('it is not the same!');
}
if (banana === banana3) {
    console.log('it is the same!');
} else {
    console.log('it is not the same!');
}

if (fruitComparator(banana, banana2)) {
    console.log('it is the same!');
} else {
    console.log('it is not the same!');
}

function fruitComparator(fruit1, fruit2) {
    return fruit1.name === fruit2.name;
}

console.log(banana, banana3);
banana3.name = 'manuel';
console.log(banana, banana3);
banana.name = 'juan'
console.log(banana, banana3);


const programmingScore = {
    "?Xavi": 50,
    Avismis: -350,
    "Errowder": 35,
}


programmingScore.Avismis = 4;
programmingScore["?Xavi"] = 4;


const myObject = {
    name: 'Juan',
    lastName: 'sanchez',
    points: 1,
    animals: ["dog", "cat", "fishes"],
    games: {
        "The Witcher 2": {
            finished: true,
            pirated: false
        },
        "Eye of the beholder": {
            finished: false,
            pirated: true
        }
    },
    isDead: false,
    kill: function () {
        this.isDead = true;
    }
}

const {isDead, name, games} = myObject;

console.log(games["Eye of the beholder"], name);

//importante Object.keys
console.log(Object.keys(myObject));
let index = 0
const propertiesArray = Object.keys(myObject);
while (index < propertiesArray.length) {
    const propertyName = propertiesArray[index];
    console.log(propertyName, myObject[propertyName]);
    index++
}


let myCapacity = 0
