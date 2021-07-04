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
    getCurrentBoard();
    mineSweeper.openSlot(1, 1);
    getCurrentBoard();
    console.log('GAME OVER CERDO');
}
function wonGame() {
    getCurrentBoard();
    mineSweeper.openSlot(0, 0);
    getCurrentBoard();
    mineSweeper.openSlot(1, 0);
    getCurrentBoard();
    mineSweeper.openSlot(2, 1);
    getCurrentBoard();
    mineSweeper.openSlot(2, 0);
    getCurrentBoard();
    mineSweeper.openSlot(1, 2);
    getCurrentBoard();
    mineSweeper.toggleFlag(1, 1);
    getCurrentBoard();
    mineSweeper.toggleFlag(2, 2);
    getCurrentBoard();
    mineSweeper.openSlot(0, 1);
    getCurrentBoard();
    mineSweeper.openSlot(0, 2);
    getCurrentBoard();
    console.log('YOU WON');
}
wonGame();
