// Dada la base y la altura de un triángulo por terminal, crea un programa que muestra por terminal el área del triángulo usando la función "triangleArea" de la librería de ejercicios
// Ten en cuenta que la función "require" importa la libería, y tendrás que darle la posición relativa de donde ésta se encuentre
// utiliza "." para referirte al directorio actual, ".." par el directorio padre
// por ejemplo para utilizar la librería que está en /exercises/functions/functions.exercise.library desde un archivo en /Avismis/functions/funcionts.exercise1.solution.js
// tendríamos que subir un nivel (para salir de functions)      -> '../'
// tendríamos que subir otro nivel ( para salir de Avismis)     -> '../../'
// ahora tendríamos que entrar en exercises                     -> '../../exercises/'
// ahora tendríamos que entrar en functions                     -> '../../exercises/functions/';
// y ahora ya podemos referirnos al archivo de la librería      -> '../../exercises/functions/functions.exercise.library.js'
// quedándonos const exerciseLibrary = require('../../exercises/functions/functions.exercise.library.js');

'use strict';
const exerciseLibrary = require("./functions.exercise.library");
exerciseLibrary.triangleArea();

const argument = process.argv
let index = 2;
let lastIndex = argument.length -1
let base = parseInt (argument[index])
let height = parseInt (argument[lastIndex])
console.log("El area del triangulo es " + exerciseLibrary.triangleArea(base, height))








