// Create a function Square(width,height,linePixel,fillPixel)
// This function returns a Shape object with a Square drawing inside, the Shape must have the same width and height as the one given
// the returned Shape, must use the color of linePixel to draw the line of the square and the color of the fillPixel to draw the fill of the square
// Example:
// const {Pixel} = require("./mixed.exercise1"); // make sure to import correctly from the previous exercise
// const bluePixel = Pixel(0, 0, 255, 255);
// const redPixel = Pixel(255, 0, 0, 255);
// const redAndBlueSquare = Square(50, 50, bluePixel, redPixel);
// const {drawShape} = require("../../resources/drawingLibrary");
// drawShape(redAndBlueSquare);  // Running this should open an image of a 50 x 50 pixels square with blue line and filled in red, just like the image in /resources/mixed/exercise3.png

const {Pixel} = require("./mixed.exercise1")
const {Shape} = require("./mixed.exercise2")

const bluePixel = Pixel(0, 0, 255, 255)
const redPixel = Pixel(255, 0, 0, 255)
const redAndBlueSquare = Square(50, 50, bluePixel, redPixel)

function Square(width, height, linePixel, fillPixel) {
    const shapeSquare = Shape(5, 5)
    shapeSquare.setPixel(0, 0, bluePixel);
    shapeSquare.setPixel(0, 1, bluePixel);
    shapeSquare.setPixel(0, 2, bluePixel);
    shapeSquare.setPixel(0, 3, bluePixel);
    shapeSquare.setPixel(0, 4, bluePixel);
    shapeSquare.setPixel(1, 0, bluePixel);
    shapeSquare.setPixel(1, 1, redPixel);
    shapeSquare.setPixel(1, 2, redPixel);
    shapeSquare.setPixel(1, 3, redPixel);
    shapeSquare.setPixel(1, 4, bluePixel);
    shapeSquare.setPixel(2, 0, bluePixel);
    shapeSquare.setPixel(2, 1, redPixel);
    shapeSquare.setPixel(2, 2, redPixel);
    shapeSquare.setPixel(2, 3, redPixel);
    shapeSquare.setPixel(2, 4, bluePixel);
    shapeSquare.setPixel(3, 0, bluePixel);
    shapeSquare.setPixel(3, 1, redPixel);
    shapeSquare.setPixel(3, 2, redPixel);
    shapeSquare.setPixel(3, 3, redPixel);
    shapeSquare.setPixel(3, 4, bluePixel);
    shapeSquare.setPixel(4, 0, bluePixel);
    shapeSquare.setPixel(4, 1, bluePixel);
    shapeSquare.setPixel(4, 2, bluePixel);
    shapeSquare.setPixel(4, 3, bluePixel);
    shapeSquare.setPixel(4, 4, bluePixel);


    let x = 0

    while (x <= width - 1) {
        let y = 0
        while (y <= height){
            if (y === 0){
                y = bluePixel
            }
            y++
        }
        x = bluePixel
     x++
    }
}


return shapeSquare;
}

exports.Square = Square;
