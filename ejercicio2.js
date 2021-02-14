// Escribe un programa que dados 3 números y escriba en la pantalla el mayor de los tres.
// node ejercicio2.js 1 2 3
let inputArray = process.argv;


// 2 + 2 -> 4
// true || false ->

const requiredNumberOfParameters = 5;
if (inputArray.length !== requiredNumberOfParameters) {
    console.log("introduce 3 numeros ni mas ni menos aweonao")
} else {
    let firstNumber = parseInt(inputArray[2]); // 50
    let secondNumber = parseInt(inputArray[3]);// 100
    let thirdNumber = parseInt(inputArray[4]);// 30

    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        console.log("solo se admiten numeros")
    } else {
        let biggestNumber = firstNumber;

        if (biggestNumber < secondNumber) {
            biggestNumber = secondNumber;
        }
        if (biggestNumber < thirdNumber) {
            biggestNumber = thirdNumber;
        }

        console.log("el mayor numero de los tres es " + biggestNumber)
    }


}

//if (nuestroArray[2] > nuestroArray[3]) {

// }
/// a
/// alava
/// barcelona
//console.log("el mayor numero de los tres es")


// if(nuestroArray[2] < nuestroArray[3]||
// nuestroArray[2] < nuestroArray[4]){
//     let p = nuestroArray[2]
//     console.log(p)
//}


//if (p < nuestroArray[4]) {
//    let p = nuestroArray[4]
//}
// else {
//   let p = nuestroArray[3]
//}
// console.log(p)
//}
// if (nuestroArray[2] > nuestroArray[4]) {
//   let p = nuestroArray[4]
//}