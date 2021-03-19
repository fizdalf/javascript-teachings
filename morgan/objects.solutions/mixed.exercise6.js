const {Shape} = require("../../fizdalf/mixed/mixed.exercise2.solution");
const {Pixel} = require("../../Avismis/mixed/mixed.exercise1.solutions");
const {drawShape} = require("../../resources/drawingLibrary");


function CrazyShape(height, width, linePixel, fillPixel) {
    const shapeSquare = Shape(width, height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToPaint = fillPixel;
            if (x === 0 || x === width - 1 || y === 0 || y === height - 1 || y === height / 2) {
                pixelToPaint = linePixel;
            }
            shapeSquare.setPixel(x, y, pixelToPaint);
        }
    }
    return shapeSquare;
}

drawShape(CrazyShape(3, 3, Pixel(0, 0, 0, 255), Pixel(255, 255, 255, 255)));
