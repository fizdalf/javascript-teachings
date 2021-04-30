class BoardGame {
    numberOfPieces = 1000;
    long = 70;
    wide = 50;
    shape = 'rectangle';
    ageRecommendation = 15 - 99;
    board = false

    determineAgeRecommendation(numberOfPieces: number) {
        this.numberOfPieces = numberOfPieces;
        if (this.numberOfPieces > 0 && this.numberOfPieces < 20) {
            this.ageRecommendation = 6 - 10
        } else if (this.numberOfPieces > 20 && this.numberOfPieces < 100) {
            this.ageRecommendation = 10 - 15;
        } else if (this.numberOfPieces > 100 && this.numberOfPieces < 500) {
            this.ageRecommendation = 15 - 18
        } else if (this.numberOfPieces > 500 && this.numberOfPieces < 5000) {
            this.ageRecommendation = 18 - 99
        }
    }
}

class puzzle extends BoardGame {
    numberOfPieces = 1000;
    long = 50;
    wide = 50;
    shape = 'square';
}

class shapedPuzzle extends puzzle {
    numberOfPieces = 1000;
    long = 60;
    wide = 50;
    shape = 'especial';

    determineAgeRecommendation(numberOfPieces: number) {
        this.numberOfPieces = numberOfPieces;

    }
}

class threeDPuzzle extends shapedPuzzle {
    numberOfPieces = 500;
    long = 80;
    wide = 60;
    shape = '3D';
}


class rolGame extends BoardGame {
    cards = 'treasures';
    // @ts-ignore
    'events';
    // @ts-ignore
    'characters';
    // @ts-ignore
    'monsters';
    numberOfCards = 200
    figures = 'monsters';
    // @ts-ignore
    'characters'
    numberOfFigures = 50
    numberOfTotems = 6
    board = true
}
