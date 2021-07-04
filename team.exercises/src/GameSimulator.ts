import {MineSweeper} from "./BuscaMinas";
import {MinePosition} from "./MinePositions";
import {PredeterminedMinesPositions} from "./PredeterminedMinesPositions";
const Positions = new PredeterminedMinesPositions([new MinePosition(1, 1), new MinePosition(2, 2)])
const mineSweeper = new MineSweeper(Positions, 2, 3)

function getElements() {
    const arrays: string[][] = []
    mineSweeper.getBoard().map((array) => {
        const elements: string[] = []
        array.map((string) => {
            elements.push(string)
        })
        arrays.push(elements)
    })
    return arrays
}

function getCurrentBoard() {
    console.log('╔═══╦═══╦═══╗');
    console.log('║' + getElements()[0][0] + '║' + getElements()[0][1] + '║' + getElements()[0][2] + '║')
    console.log('╠═══╬═══╬═══╣');
    console.log('║' + getElements()[1][0] + '║' + getElements()[1][1] + '║' + getElements()[1][2] + '║')
    console.log('╠═══╬═══╬═══╣');
    console.log('║' + getElements()[2][0] + '║' + getElements()[2][1] + '║' + getElements()[2][2] + '║')
    console.log('╚═══╩═══╩═══╝');
}

function lostGame() {
    getCurrentBoard();
    mineSweeper.openSlot(1, 1)
    getCurrentBoard();
    console.log('GAME OVER CERDO')
}

function wonGame() {
    getCurrentBoard();
    mineSweeper.openSlot(0,0)
    getCurrentBoard();
    mineSweeper.openSlot(1,0)
    getCurrentBoard();
    mineSweeper.openSlot(2,1)
    getCurrentBoard();
    mineSweeper.openSlot(2,0)
    getCurrentBoard();
    mineSweeper.openSlot(1,2)
    getCurrentBoard();
    mineSweeper.toggleFlag(1,1)
    getCurrentBoard();
    mineSweeper.toggleFlag(2,2)
    getCurrentBoard();
    mineSweeper.openSlot(0,1)
    getCurrentBoard();
    mineSweeper.openSlot(0,2)
    getCurrentBoard();
    console.log('YOU WON')

}

wonGame()