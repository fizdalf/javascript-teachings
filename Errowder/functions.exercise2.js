// Dados los tamaños de dos lados contiguos de un rectángulo  por terminal, crea un programa que muestra por terminal el perímetro del rectángulo
// usando la función "rectanglePerimeter" de la librería de ejercicios
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
const exerciseLibrary = require("./functions.exercise.library.js");
exerciseLibrary.rectanglePerimeter();

const terminal = process.argv;
const index = 2
const lastIndex = 3
const a = parseInt(terminal[index])
const b = parseInt(terminal[lastIndex])

console.log("El perimetro del rectangulo es " + exerciseLibrary.rectanglePerimeter(a, b))
