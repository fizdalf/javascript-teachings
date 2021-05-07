//Las clases determinan como va a ser un objeto que engloba las caracteristicas básicas de un conjunto de objetos

class objetoPadre {
    propiedad: loQueSea
}

//Las subclases son clases más específicas de la clase padre, comparte caracteristicas anteriores pero tiene algunas específicas

class objetoHijo extends objetoPadre {
    propiedadEspecifica: otraPropiedadQueNoContengaElObjetoPadre
}

//También existen clases que pueden modificar a otras clases mediante funciones

class objetoPadreQueModifica {
    función: funciónQueModificaYComoLoModifica(nombreCualquiera){
    }
}

//Para crear un objeto, hay que añadir "new", ya que crearemos copias del objeto con sus nuevas propiedades y/o caracteristicas


//Example

class motorVehicle{
    maxSpeed = 200
}

class car extends motorVehicle {
    seatBelt = true
}

class speedMutations {
    applySpeedVariation(objetive) {
        objetive.maxSpeed *= 2
    }
}

const vehicle = new car
const velocity = new speedMutations()
velocity.applySpeedVariation(vehicle)
console.log(vehicle)