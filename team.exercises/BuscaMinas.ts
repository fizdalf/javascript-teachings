import {Square} from "./"

const square = document.createElement('div')
const mina = square.textContent = "MINA" // imagen de una bomba
const number = square.textContent = "1" // ya cambiaré los posibles números

if (square) {
    squaresArray.forEach((element) => {
        const button = document.createElement('button')
        button.className = "button";
        button.addEventListener("click", () => {
            minesWeepers()
        })
    })
}

function minesWeepers() {
    while (square.textContent !== mina) {
        if (square.textContent === number) {
            // el numero debe indicar cuantas minas tiene alrededor
            return;
        }
        //debe mostrar los datos los cuales serán vacios / eliminar el square
    }
    alert('You Lose')
}

Square(30, 15, )