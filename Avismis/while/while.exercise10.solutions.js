// dada una frase por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que la frase lo sea, y "No es un palíndromo" en caso contrario";
// hay que tener en cuenta que los espacios que ponga el usuario en el terminal, no los recibimos.
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();
// console.log("AAAAAAAAAAAAA".toLowerCase());
// A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá
// Adan no calla con nada


// console.log('A' === 'Á'); // aabbaa

const arguments = process.argv;

let index = 2;


total = []
const lastIndex = arguments.length - 1;

while (index <= lastIndex) {
    total.push(arguments[index])
    index++
}

console.log(total)


//
// const itemsCount = arguments.length - 2;
// average = total / itemsCount
//
// console.log("La media de estas " + itemsCount + " letras es " + average)