//También podremos privatizar el constructor para que no se copie en las subclases, el problema es que tampoco podrémos inicializar el constructor, para ello tendremos que crear un static, el cual recibe la clave que necesita el contructor y devolverá un nuevo objeto con esa clave ya añadida al constructor

//Un "static" convierte una propiedad en un concepto estatico, lo cual solo queda en la clase padre sin que se copie en una nueva instancia
//Para usar una función estatica de una clase, podremos usarla directamente sin crear instancias

class nombreDeUnaClase {
    public static nombreDeFunción(tipoRequerido: x){
        return x
    }
}

nombreDeUnaClase.nombreDeFunción(valor)


//Example

class Mobile {
    private brand;
    protected batteryPower = 500;
    private screen = true;
    public static count = 0;

    private constructor(brand: string) {
        this.brand = brand;
        Mobile.count++;
    }

    public static createMobile(brandFinder: Finder) {
        const brand = brandFinder.getBrand();
        if (brand == "iPhone") {
            throw new Error('No quiero esa mierda');
        }
        return new Mobile(brand);
    }
}