import {Square} from "./../Sergio/mixed/mixed.exercise3.solution"
import {Pixel} from "./../Sergio/mixed/mixed.exercise1.solution"

const square = Square(300, 150, Pixel(0, 0, 0), Pixel(192, 192, 192))
const buttons = Square(10, 10, Pixel(0, 0, 0), Pixel(192, 192, 192))
let buttonsArray =[]
for (let weight = 0; weight < 300; weight+10){
    buttons.push(buttonsArray)
}
for (let height = 0; height < 150; height+10){
    buttons.push(buttonsArray)
}
// const square = document.createElement('div')
const mina = square.textContent = "MINA" // imagen de una bomba
const number = square.textContent = "1" // ya cambiaré los posibles números

let numberOfMines = 100

if (buttons) {
    buttonsArray.forEach((element) => {
        const button = document.createElement('button')
        button.className = "button";
        button.addEventListener("leftClick", () => {
            minesWeepers()
        })
        button.addEventListener("rightClick", () => {
            tagging()
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

function tagging(){
    const firstClick = "flag"
    const secondClick = "questionMark"
    if (firstClick){
        numberOfMines--
    }
}

function timing() {
    const currentTiming = 0
    return currentTiming
}

