// dada una frase por el terminal, mostrar por pantalla "Es un palíndromo" en caso de que la frase lo sea, y "No es un palíndromo" en caso contrario";
// hay que tener en cuenta que los espacios que ponga el usuario en el terminal, no los recibimos.
// tengan en cuenta que la letra "A" no es igual que la letra "a", para solucionar ésto podemos usar "A".toLowerCase();
// console.log("AAAAAAAAAAAAA".toLowerCase());
// A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá
// Adan no calla con nada
// console.log('A' === 'Á'); // aabbaa

//Intenta hacerlo primero para ver si una palabra es palindromo luego mirar una frase

const arguments = process.argv
let index = 2
let lastIndex = arguments.length - 1
let currentLetter = arguments[index]
let lastLetter = arguments[lastIndex]

if (currentLetter === lastLetter) {
    while (index !== lastIndex) {
        if (currentLetter === lastLetter) {
            currentLetter++
            lastLetter--
            currentLetter = arguments[index].length
            lastLetter = arguments[lastIndex].length
        } else {
            console.log("No es un palindromo")
            break;
        }
        index++
        lastIndex--
        index = 2
        lastIndex = arguments.length - 1
    }
    console.log("Es un palindromo")
} else {
    console.log("No es un palindromo")
}