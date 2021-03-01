// dada una palabra por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que la palabra lo sea, y "No es un palíndromo" en caso contrario";
// hay que tener en cuenta que los espacios que ponga el usuario en el terminal, no los recibimos.
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();

// console.log("AAAAAAAAAAAAA".toLowerCase());
'use strict'

const [, , ...word] = process.argv
let index = 2
let lastIndex = word.length - 1
let letra = word[index]
let ultimaLetra = word[lastIndex]

if (letra === ultimaLetra) {
    while (index !== ultimaLetra) {
        if (letra === ultimaLetra) {
            letra++
            ultimaLetra--
            letra = word[index].length
            ultimaLetra = word[lastIndex].length
        }
        index++
        lastIndex--
        lastIndex = word.length - 1
    }   console.log(word + ' es un palíndromo');

} else {
    console.log(word + ' no es un palíndromo');
}