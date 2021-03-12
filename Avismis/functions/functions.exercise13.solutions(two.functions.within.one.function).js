// Create a function composeFunctions(value, a,b) which receives a value and two functions as arguments and returns the result of calling a on the return of calling b
// with the value
// Example: composeFunctions(4,(number) => number * 2, (number) => number + 2) -> 12
// Example: composeFunctions("test", string => "Prefix "+ string, string => string + " Postfix") -> "Prefix test Postfix"


const composeFunctions = (value, functiona, functionb) => functiona((functionb(value)))

console.log(composeFunctions(5, gato => gato+2, perro => perro*8))


// hemos creado una función lamda llamada composeFunctions, donde usamos value, functiona y functionb, y especificamos que
// functiona se aplica al resultado de functionb aplicado a value.
// Después hemos llamado a la función composeFunction especificando los valores, para que se ejecute tal y como lo hemos
// definido previamente.

