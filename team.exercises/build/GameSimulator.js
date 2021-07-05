"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuscaMinas_1 = require("./BuscaMinas");
var MinePositions_1 = require("./MinePositions");
var PredeterminedMinesPositions_1 = require("./PredeterminedMinesPositions");
var Positions = new PredeterminedMinesPositions_1.PredeterminedMinesPositions([new MinePositions_1.MinePosition(1, 1), new MinePositions_1.MinePosition(2, 2)]);
var mineSweeper = new BuscaMinas_1.MineSweeper(Positions, 2, 3);
function getElements() {
    var arrays = [];
    mineSweeper.getBoard().map(function (array) {
        var elements = [];
        array.map(function (string) {
            elements.push(string);
        });
        arrays.push(elements);
    });
    return arrays;
}
function getCurrentBoard() {
    console.log('╔═══╦═══╦═══╗');
    console.log('║' + getElements()[0][0] + '║' + getElements()[0][1] + '║' + getElements()[0][2] + '║');
    console.log('╠═══╬═══╬═══╣');
    console.log('║' + getElements()[1][0] + '║' + getElements()[1][1] + '║' + getElements()[1][2] + '║');
    console.log('╠═══╬═══╬═══╣');
    console.log('║' + getElements()[2][0] + '║' + getElements()[2][1] + '║' + getElements()[2][2] + '║');
    console.log('╚═══╩═══╩═══╝');
}
function lostGame() {
    console.log('Starts the game');
    getCurrentBoard();
    console.log('Open the slot 1, 1');
    mineSweeper.openSlot(1, 1);
    getCurrentBoard();
    console.log('GAME OVER CERDO');
}
function wonGame() {
    mineSweeper = new BuscaMinas_1.MineSweeper(Positions, 2, 3);
    console.log('Starts the game');
    getCurrentBoard();
    console.log('Open the first slot 0, 0');
    mineSweeper.openSlot(0, 0);
    getCurrentBoard();
    console.log('Open the slot 1, 0');
    mineSweeper.openSlot(1, 0);
    getCurrentBoard();
    console.log('Open the slot 2, 1');
    mineSweeper.openSlot(2, 1);
    getCurrentBoard();
    console.log('Open the slot 2, 0');
    mineSweeper.openSlot(2, 0);
    getCurrentBoard();
    console.log('Open the slot 1, 2');
    mineSweeper.openSlot(1, 2);
    getCurrentBoard();
    console.log('Place a flag in the slot 1, 1');
    mineSweeper.toggleFlag(1, 1);
    getCurrentBoard();
    console.log('Place a flag in the slot 2, 2');
    mineSweeper.toggleFlag(2, 2);
    getCurrentBoard();
    console.log('Open the slot 0, 1');
    mineSweeper.openSlot(0, 1);
    getCurrentBoard();
    console.log('Open the slot 0, 2');
    mineSweeper.openSlot(0, 2);
    getCurrentBoard();
    console.log('YOU WON GUARRO');
}
lostGame();
wonGame();
