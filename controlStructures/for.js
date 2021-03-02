//for
const list = process.argv;

let elementsInList = list.length;
let lastIndex = elementsInList - 1;

let index = 0;
while (index <= lastIndex) {
    console.log("elemento: " + list[index]);
    index += 2; // index = index + 1;
}


for (let secondIndex = 0; secondIndex < list.length; secondIndex += 2) {
    console.log("elemento: " + list[secondIndex]);
}


