// Create a function Square(width,height,linePixel,fillPixel)
// This function returns a Shape object with a Square drawing inside, the Shape must have the same width and height as the one given
// the returned Shape, must use the color of linePixel to draw the line of the square and the color of the fillPixel to draw the fill of the square
// Example:
// const {Pixel} = require("./mixed.exercise1"); // make sure to import correctly from the previous exercise
// const bluePixel = Pixel(0, 0, 255, 255);
// const redPixel = Pixel(255, 0, 0, 255);
// const redAndBlueSquare = Square(50, 50, bluePixel, redPixel);
// const {drawShape} = require("../resources/drawingLibrary");
//
// const {Pixel} = require("./mixed.exercise1")
//
// const bluePixel = Pixel(0, 255, 255, 255)
// const redPixel = Pixel(255, 255, 0, 0)
// const redAndBlueSquare = Square(500, 500, bluePixel, redPixel)
// drawShape(redAndBlueSquare);  // Running this should open an image of a 50 x 50 pixels square with blue line and filled in red, just like the image in /resources/mixed/exercise3.png
const {Shape} = require("./mixed.exercise2.solution")

function Square(width, height, linePixel, fillPixel) {
    const shapeSquare = Shape(width, height); // width: 3, height: 3
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToPaint = fillPixel;
            if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
                pixelToPaint = linePixel;
            }
            shapeSquare.setPixel(x, y, pixelToPaint);
        }
    }
    return shapeSquare;
}

exports.Square = Square;


