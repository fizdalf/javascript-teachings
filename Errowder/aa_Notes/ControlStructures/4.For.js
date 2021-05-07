//Otra forma de crear un bucle es usando el for:

//Ejemplo

const list = process.argv
let elementsInList = list.length
let lastIndex = elementsInList -1

let index = 0
while (index <= lastIndex){
    console.log("element: " + list[index])
    index++
}


for (let secondIndex = 0 ; secondIndex < list.length; secondIndex += 2){
    console.log("elemento: " + list[secondIndex])
}


//En definitiva son lo mismo pero el for es más abreviado aunque tiene limitaciones