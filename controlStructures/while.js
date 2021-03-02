'use strict';

let list = [1, 54, 32, 62, 21, 412, 623, 3];
// console.log(list.length);

let index = list.length - 1;
while (index >= 0) {
    console.log(list[index]);
    index--;
}


console.log(list[index]);
index++;
while (index < list.length) {
    console.log(list[index]);
    index++;
}

do {
    console.log(list[index]);
    index++;
} while (index < list.length)
// Do allows us to write code that we want to execute AT LEAST 1 time.
