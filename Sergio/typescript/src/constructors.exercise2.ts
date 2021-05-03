class Animals {
    reproduction = true;
    extremities = 4;
    fly = false;
    constructor(extremities = 0, reproduction = false, fly = true) {
        this.extremities = extremities
        this.reproduction = reproduction
        this.fly = fly
    }
    castrate(){
        if (this.reproduction){
            console.log('Dile bye a tu aparato reproductor')
            this.reproduction = false
        }else{
            console.log('Tranquilo quedate con tu pito igual no funciona')
        }
    }
}

class Mammal extends Animals{
    constructor(extremities = 0, reproduction = false, fly = false) {
        super(extremities,reproduction,fly);
    }
    getPregnant(){
        if(!this.reproduction){
            console.log('no te puedes quedar embarazada')
        }else{
            console.log('estás preñada')
        }
    }
}
class Reptiles extends Animals{
    constructor(extremities = 0, reproduction = false, fly = true) {
        super(extremities,reproduction,fly);
    }
}
class Aves extends Animals{
    constructor(extremities = 0, reproduction = false, fly = false) {
        super(extremities,reproduction,fly);
    }
    cuteWings(){
        if (!this.fly){
            console.log('jaja no puedes volar')
        }else{
            console.log('*Le corta las alas*')
            this.fly = false
        }
    }
}

const Dog = new Mammal(4,true,false);
const SterileCat = new Reptiles(4,false,false);
const SterileSnake= new Mammal(0,false,false);
const Bird = new Aves(4,true,true)
console.log(Dog.castrate());
console.log(SterileSnake.castrate());
console.log(Bird.cuteWings())
console.log(SterileSnake.getPregnant())
