'use strict';
// Escribe un programa que pida una palabra y escriba cuántas de las letras que tiene son vocales
const palabra = process.argv[2];

const listaDeVocales = ["a", "e", "i", "o", "u"];
let vocales = 0;
// console.log(!!palabra);


// 0 == "0" -> true
// 0 === "0" -> false
if (palabra) {

        // if (palabra[0] === listaDeVocales[0] ||
        //     palabra[0] === listaDeVocales[1] ||
        //     palabra[0] === listaDeVocales[2] ||
        //     palabra[0] === listaDeVocales[3] ||
        //     palabra[0] === listaDeVocales[4]) {
        //     vocales++;
        //}


    for (let p = 0; p < palabra.length; p++) {
        for (let i = 0; i < listaDeVocales.length; i++) {
            if (palabra[p] === listaDeVocales[i]) {
                vocales++
            }
        }
    }
}
console.log(vocales)

//console.log(palabra);
//console.log(palabra[0])
//console.log(vocales)







