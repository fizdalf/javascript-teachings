"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BoardGame = /** @class */ (function () {
    function BoardGame() {
        this.numberOfPieces = 1000;
        this.long = 70;
        this.wide = 50;
        this.shape = 'rectangle';
        this.ageRecommendation = 15 - 99;
        this.board = false;
    }
    BoardGame.prototype.determineAgeRecommendation = function (numberOfPieces) {
        this.numberOfPieces = numberOfPieces;
        if (this.numberOfPieces > 0 && this.numberOfPieces < 20) {
            this.ageRecommendation = 6 - 10;
        }
        else if (this.numberOfPieces > 20 && this.numberOfPieces < 100) {
            this.ageRecommendation = 10 - 15;
        }
        else if (this.numberOfPieces > 100 && this.numberOfPieces < 500) {
            this.ageRecommendation = 15 - 18;
        }
        else if (this.numberOfPieces > 500 && this.numberOfPieces < 5000) {
            this.ageRecommendation = 18 - 99;
        }
    };
    return BoardGame;
}());
var puzzle = /** @class */ (function (_super) {
    __extends(puzzle, _super);
    function puzzle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfPieces = 1000;
        _this.long = 50;
        _this.wide = 50;
        _this.shape = 'square';
        return _this;
    }
    return puzzle;
}(BoardGame));
var shapedPuzzle = /** @class */ (function (_super) {
    __extends(shapedPuzzle, _super);
    function shapedPuzzle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfPieces = 1000;
        _this.long = 60;
        _this.wide = 50;
        _this.shape = 'especial';
        return _this;
    }
    shapedPuzzle.prototype.determineAgeRecommendation = function (numberOfPieces) {
        this.numberOfPieces = numberOfPieces;
    };
    return shapedPuzzle;
}(puzzle));
var threeDPuzzle = /** @class */ (function (_super) {
    __extends(threeDPuzzle, _super);
    function threeDPuzzle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfPieces = 500;
        _this.long = 80;
        _this.wide = 60;
        _this.shape = '3D';
        return _this;
    }
    return threeDPuzzle;
}(shapedPuzzle));
var rolGame = /** @class */ (function (_super) {
    __extends(rolGame, _super);
    function rolGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cards = 'treasures';
        _this.numberOfCards = 200;
        _this.figures = 'monsters';
        _this.numberOfFigures = 50;
        _this.numberOfTotems = 6;
        _this.board = true;
        return _this;
    }
    return rolGame;
}(BoardGame));
