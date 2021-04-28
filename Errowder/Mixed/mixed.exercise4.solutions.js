// Create a function ShapePosition(x,y,shape) that returns an object that represents the positioning of a particular Shape in 2d space, it has the following properties
//  - Properties
//      + x                 This is the X position of the Shape
//      + y                 This is the Y position of the Shape
//      + shape             This is the Shape to be positioned
//  - Methods
//
// Example:
// const {drawShape} = require("../resources/drawingLibrary");
// const {Pixel} = require("./mixed.exercise1"); // make sure to import correctly from the previous exercise
// const {Square} = require("./mixed.exercise3"); // make sure to import correctly from the previous exercise
// const bluePixel = Pixel(0, 0, 255, 255);
// const redPixel = Pixel(255, 0, 0, 255);
// const redAndBlueSquare = Square(10, 10, redPixel, bluePixel);
// const shapePosition1 = ShapePosition(5, 6, redAndBlueSquare)
// console.log(shapePosition1.x) //-> 5
// console.log(shapePosition1.y) //-> 6
// drawShape(shapePosition1.shape);  // Running this should open an image of a 50 x 50 pixels square with blue line and filled in red, just like the image in /resources/mixed/exercise3.png

function ShapePosition(x, y, shape) {
    return {
        x,
        y,
        shape,
    };
}

exports.ShapePosition = ShapePosition;
