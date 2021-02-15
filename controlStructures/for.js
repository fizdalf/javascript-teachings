// while/do/for
const list = process.argv;

let elementsInList = list.length;
let lastIndex = elementsInList - 1;

let index = 2;
while (index <= lastIndex) {
    console.log("elemento: " + list[index]);
    index++; // index = index + 1;
}


