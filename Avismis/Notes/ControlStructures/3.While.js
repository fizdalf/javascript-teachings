//while, va a leer de nuevo la operación y si es verdadero,  al llegar al final de "}" se volverá a leer, si nada cambia se creará un loop infinito

//Ejemplo

while (true) {
    console.log("this is true");
}

//Se repetirá indefinidamente

let test = true

while (test) {
    console.log("this is true");
    test = false;
}

//En este caso leerá una vez y al hacer el loop el valor de test se vuelve negativo, por lo que no volverá a ejecutarse

//"break", sirve para detener el loop

//"continue", al llegar a este comando, se saltará el resto de las operaciones e irá directamente al final del "}", empezando de nuevo el loop

//Para hacer algo una vez antes de empezar un bucle while usaremos el "do"

//Ejemplo

do {
        console.log(list[index])
        index++
    } while (index < list.length)