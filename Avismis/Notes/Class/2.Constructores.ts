//Las clases pueden necesitar una propiedad para inicializarse (un valor para una propiedad para que el objeto pueda funcionar)

class objetoQueVamosAUsar {
    propiedadDelObjeto: tipoPermitidoParaLaPropiedad; //También se le puede dar un valor aunque no es lo normal
    constructor(tipoPermitidoParaLaPropiedad: objetoDeEseTipoPermitido){
        if(objetoDeEseTipoPermitido){
            this.propiedadDelObjeto = objetoDeEseTipoPermitido
        }
    }
}

//Al darle un inicializador con el constructor, el objeto puede ser utilizado, en caso contrario siempre dara undefinide

//Si una subclase usa un constructor del padre se tendrá que llamar con "super"

class objetoHijo extends objetoQueVamosAUsar {
    constructor(tiposQueUsaElConstructorPadreOValoresParaEsasPropiedades){
        super(todosLosValoresOTiposDelConstructorPadre){
        }
    }
}

//Example

class bateria{
    battery = true
}

class teléfono {
    battery: bateria
    constructor(bateria:bateria){
        if(bateria){
            this.battery = bateria
        }
    }
}

class Móvil extends teléfono {
    constructor(bateria:bateria){
        super(bateria)
    }
}