//La privacidad es una caracteristica unica de las clases, las cuales hay de 3 tipos y tienen funcionalidad diferentes:

// private -> Solo podrá ser vista y utilizada dentro de la propia clase, no se podrá utilizar ni ver desde fuera
// protected -> Solo se podrá ver y acceder si es desde una clase o una subclase
// public -> Sera como hasta ahora la hemos utilizado, siempre será visible y sus datos serán accesibles y modificables por cualquiera

//Una sintaxis para crear propiedades desde el constructor con un dato que nos pasen seria

class Mobile {
    constructor(private brand:string){
    }
}

//Sería lo mismo que escribir

class mobile {
    private brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
}