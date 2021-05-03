class Finder {
    private brand: any;

    public getBrand() {
        return this.brand;
    }
}

class Mobile {
    protected batteryPower = 500;
    private screen = true;
    public static count = 0;

    constructor(public brand: string) {
        Mobile.count++;
    }

    // private brand: string;
    // public constructor(brand: string) {
    //     this.brand = brand;
    //     Mobile.count++;
    // }

    // public static createMobile(brandFinder: Finder) {
    //     const brand = brandFinder.getBrand();
    //     if (brand == "iPhone") {
    //         throw new Error('No quiero esa mierda');
    //     }
    //     return new Mobile(brand);
    // }
    //
    // public static createMobileWithBrand(brand: string){
    //     if (brand == "iPhone") {
    //         throw new Error('No quiero esa mierda');
    //     }
    //     return new Mobile(brand);
    // }

    reduceBatteryPower(amount: number) {
        this.batteryPower -= amount;
    }

    hasScreen() {
        return this.screen;
    }

    private capitalizeBrand(brand: string) {
        return brand;
    }

    public getBrand() {
        return this.brand;
    }

    public static getCount() {
        return Mobile.count;
    }
}

class SamsungMobile extends Mobile {
    constructor(brand: string = "Samsung") {
        super(brand);
    }
}

// const samsung = new Mobile('Samsung');
// const pepe = new Mobile('Samsung');
// const juan = new Mobile('Samsung');
// const pepito = new Mobile('Samsung');
// const huawei = new Mobile('Huawei');
const myIPhoneDeSamsung = new SamsungMobile('Apple la manzanita de mierda');
console.log(myIPhoneDeSamsung.brand);
// const myNewSamsung = new SamsungMobile();

Mobile.count = 30;
console.log(Mobile.getCount());

// class Utils {
//     private pepe: number = 4;
//     numberToString(number: number) {
//         return number.toString(10);
//     }
// }
class BetterUtils {
    public static numberToString(number: number) {
        return number.toString(10);
    }
}

BetterUtils.numberToString(5);