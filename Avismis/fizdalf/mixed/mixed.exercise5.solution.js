// Create a function DrawingComposition(width,height) that returns an object that represents a series of Shapes and their positions in space, like a drawing, this object has the following properties and methods
//  - Properties
//      + width                 This is how many pixels is the width of the DrawingComposition.
//      + height                This is how many pixels is the height of the DrawingComposition.
//      + shapePositions        This a array of ShapePosition objects that have the shapes and the positions we want them to be
//  - Methods
//      + addShape(x,y,shape)       This is a method that receives an x, and y position and a Shape and adds the Shape in the correct position by creating a new ShapePosition object and storing it in the list
//      + getPixelAt(x,y) => Pixel  This is a method that receives an x, and y position and returns a Pixel, which will be the result of mixing all the pixels form all the shapes that intersect at that point,
//      if there's no shape at that point, then return a black transparent pixel (R:0,G:0,B:0,A:0), check that x and y are within the bounds of the DrawingComposition
// Example:
// const {drawComposition} = require("../../resources/drawingLibrary");
const {Pixel} = require("./mixed.exercise1.solution"); // make sure to import correctly from the previous exercise
// const {Square} = require("./mixed.exercise3.solution");
const {ShapePosition} = require("./mixed.exercise4.solution");
// const newComposition = DrawingComposition(100, 100)
// const bluePixel = Pixel(0, 0, 255, 255);
// const redPixel = Pixel(255, 0, 0, 255);
// const greenPixel = Pixel(0, 255, 0, 255);
// const redAndBlueSquare = Square(50, 50, redPixel, bluePixel);
// const redAndGreenSquare = Square(50, 50, redPixel, greenPixel);
// newComposition.addShape(0, 0, redAndBlueSquare);
// newComposition.addShape(10, 10, redAndGreenSquare);

// newComposition.getPixelAt(59, 59);

// drawComposition(newComposition);

function DrawingComposition(width, height) {
    return {
        width,
        height,
        shapePositions: [],
        addShape: function (x, y, shape) {
            this.shapePositions.push(ShapePosition(x, y, shape));
        },
        getPixelAt: function (x, y) {
            if (x < 0 || x >= width || y < 0 || y >= height) {
                throw new Error("This is not valid!!!!!! AAAAAAAHHHHHH!");
            }
            let mixedPixel;
            for (let shapeIndex = 0; shapeIndex < this.shapePositions.length; shapeIndex++) {
                const currentShapePosition = this.shapePositions[shapeIndex];
                if (x >= currentShapePosition.x && x < currentShapePosition.x + currentShapePosition.shape.width && y >= currentShapePosition.y && y < currentShapePosition.y + currentShapePosition.shape.height) {
                    const shapeX = x - currentShapePosition.x;
                    const shapeY = y - currentShapePosition.y;
                    if (!mixedPixel) {
                        mixedPixel = currentShapePosition.shape.getPixel(shapeX, shapeY)
                    } else {
                        mixedPixel = currentShapePosition.shape.mixPixel(shapeX, shapeY, mixedPixel);
                    }
                }
            }

            if (!mixedPixel) {
                return Pixel(0, 0, 0, 0);
            }

            return mixedPixel;
        }
    }
}


exports.DrawingComposition = DrawingComposition;
