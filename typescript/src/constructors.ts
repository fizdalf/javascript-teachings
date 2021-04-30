class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        console.log('calling constructor');
    }

    getX() {
        return this.x;
    }
}

class LazyPoint {
    private x?: number = 0;
    private y?: number = 0;

    getX() {
        return this.x;
    }
}

let myPoint = new Point(10, 40);
myPoint = new Point(12, 40);
const yourPoint = new LazyPoint();
console.log(myPoint.getX(), yourPoint.getX())


class Engine {
    power = 100;
    started = false;

    startEngine() {
        this.started = true;
    }

    stopEngine() {
        this.started = false;
    }
}

class ElectricEngine extends Engine {
    power = 200;

    electrocuteSergio() {
        console.log('bzzzzzz');
    }
}

class SlaveEngine extends Engine {

}

class Car {
    private engine: Engine = new ElectricEngine();
    private speed: number = 0;

    private constructor(engine?: Engine) {
        if (engine) {
            this.engine = engine;
        }
    }

    private static instance: Car;

    public static theBestCar() {
        if (!this.instance) {
            console.log('llamando new car');
            this.instance = new Car(new SlaveEngine());
        }
        return this.instance;
    }

    startCar() {
        this.engine.startEngine();
        console.log('enciende también la radio');
    }

    accelerate() {
        this.speed += this.engine.power * 0.3;
    }

    getSpeed() {
        return this.speed;
    }
}

const test1 = {
    name: "manolo",
}

const test2 = test1;

const test3 = "hola";
const test4 = "hola";


console.log(test1 === test2, test3 === test4,);
const myCars = [Car.theBestCar(), Car.theBestCar()];
console.log(myCars[0] === myCars[1]);
myCars[0].accelerate();
console.log(myCars[1].getSpeed())