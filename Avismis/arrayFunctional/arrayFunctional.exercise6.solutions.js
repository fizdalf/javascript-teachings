// Create a function filter(array,criteria) that receives an array and a criteria function, and returns an array with
// only the items that provided to the criteria function return true (it calls the function with each item of the array)
// Example: console.log(filter([1,2,3], (x) => x >= 2 ))  -> shows [2,3] in the terminal
// Example: console.log(filter(["hola", "adios", "tolete"], (x) => x.length > 2 && x[1] === 'o') -> shows ["hola","tolete"] in the terminal

function filter(array, criteria){

    const theArray = []
    function Criteria (argument)



    return theArray
}
**********************************************************************************************************************

function filter(array, criteria) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (criteria(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}

[1,2,3,4].filter((elemento, indice, array) => {})

console.log(filter(["hola", "adios", "tolete"], (x,indice) => indice % 2 === 0))
