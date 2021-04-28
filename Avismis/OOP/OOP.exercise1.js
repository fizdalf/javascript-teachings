class puzzle {
    numberOfPieces = 1000;
    long = 70;
    wide = 50;
    shape = 'rectangle';
    ageRecommendation = 15 - 99;

    determineAgeRecommendation(numberOfPieces) {
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

class shapedPuzzle extends puzzle {
    numberOfPieces = 1000;
    long = 50;
    wide = 50;
    shape = 'especial';

    determineAgeRecommendation(numberOfPieces) {

    }
}

