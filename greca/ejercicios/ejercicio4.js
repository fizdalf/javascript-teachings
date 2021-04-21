// Crea un programa en el cual si la edad de la persona es mayor o igual a 18 mostrará
// por pantalla "Estás en edad de merecer", en caso contrario, si es mayor o igual a 16, "sexo legal",
// en caso contrario "Me llevarán a la cárcel si me acerco"
const edad = 20

if (edad >= 18) {
    console.log("Estás en edad de merecer")
}
else if(edad >= 16){
    console.log("Sexo legal")
}
else {
    console.log("Me llevarán a la cárcel si me acerco")
}

// ¿porqué tengo que poner el signo igual cuando le digo que si ES MENOR de 18...¿porqué no sólo menor?

// if (edad !== 18) {
//     console.log("Me llevarán a la cárcel si me acerco")
// }

// me causa gracia lo que aquí arriba con NO IGUAL !=...quise probar con CASO CONTRARIO. ¿Porque dentro delo de  mayor o igual existe la posibilidad de mayor?)