// ARRAY

console.log([])
console.log([1])
console.log([1, 2])
console.log(["test", true, 1, undefined, []]);
//            0    , 1   ,  2       , 3,  4


// Utils / Functional programming

[1, 2, "hola", 4].forEach(
    (item, index, array) => {
        console.log(item)
    }
);

//                               x => { return x * 2 }
const testMap = [1, 2, 3, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
const modifiedArray = testMap.map((x, index, array) => "hola" + x);

modifiedArray.forEach(console.log);
console.log(testMap, modifiedArray);


// filter
console.log(testMap.filter(x => x % 2 === 0).map(x =>
    ({x, y: x * 10})));

// testMap.reduce()
// testMap.find()
// testMap.splice()
// testMap.findIndex()
// testMap.reverse()
// testMap.concat()
// testMap.copyWithin()
// testMap.entries()
// testMap.every()
// testMap.some()
