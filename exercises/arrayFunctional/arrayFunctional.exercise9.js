//

const repeatStringReduceFunction = (anterior, elemento) => {
    for (let i = 0; i < elemento; i++) {
        anterior.push('Hola');
    }
    return anterior; // ["Hola"]
};
const ourArray = [5, 1, 7, 80]
console.log(ourArray.reduce(repeatStringReduceFunction, []));


function reduce(array, callbackFunction, initialState) {
    for (let i = 0; i < array.length; i++) {
        initialState = callbackFunction(initialState, array[i])
    }
    return initialState;
}


console.log(
    reduce(ourArray, (acc, item) => {
        if (item % 5 !== 0) {
            acc.push(item * 12);
        }
        return acc;
    }, [])
);


ourArray.filter(item => item % 5 !== 0).map(item => item * 12);
