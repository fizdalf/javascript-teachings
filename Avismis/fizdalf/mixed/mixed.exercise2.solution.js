// Create function Shape(width,height), that receives the width and the height and returns an object that represents a shape made of pixels,
// it is an object that is composed of a grid of pixels (previous exercise objects) that define the shape, all shapes are squares or rectangles,
// but can contain any drawing inside
// Make sure the object is initialized with as many pixels as required to fill the grid, each pixel must start with black transparent (R:0,G:0,B:0,A:0) color
// Shape
//  - Properties
//      + width                 This is how many pixels is the width of the shape.
//      + height                This is how many pixels is the height of the shape.
//      + pixels                This is a grid of pixels of "width" pixels wide and "height" pixels of height
//  - Methods
//      + setPixel(x,y,pixel)       This is a method that receives an x, and y position and a pixel and sets the pixel in the grid,
//      check that the value is within the valid width and height (starting at 0)
//      + getPixel(x,y) => Pixel    This is a method that receives an x, and y position and returns the pixel in that position of the grid.
//      + mixPixel(x,y,pixel)       This is a method that receives an x, and y position and a pixel as the previous method but instead of setting the new pixel,
//      it mixes them.
//      + clearShape()              This is a method that turns all the pixels black transparent (R:0,G:0,B:0,A:0)
// IMPORTANT!!! Before attempting this exercise and the example run "npm install" in the terminal, that should install the required dependencies for this exercise
// Example:
const {Pixel} = require("./mixed.exercise1.solution.js"); // make sure to import correctly from the previous exercise
const shapeSquare = Shape(5, 5);
const bluePixel = Pixel(0, 0, 255, 255);
const redPixel = Pixel(255, 0, 0, 255);
shapeSquare.setPixel(0, 0, bluePixel);
shapeSquare.setPixel(0, 1, bluePixel);
shapeSquare.setPixel(0, 2, bluePixel);
shapeSquare.setPixel(0, 3, bluePixel);
shapeSquare.setPixel(0, 4, bluePixel);
shapeSquare.setPixel(1, 0, bluePixel);
shapeSquare.setPixel(1, 4, bluePixel);
shapeSquare.setPixel(2, 0, bluePixel);
shapeSquare.setPixel(2, 4, bluePixel);
shapeSquare.setPixel(3, 0, bluePixel);
shapeSquare.setPixel(3, 4, bluePixel);
shapeSquare.setPixel(4, 0, bluePixel);
shapeSquare.setPixel(4, 1, bluePixel);
shapeSquare.setPixel(4, 2, bluePixel);
shapeSquare.setPixel(4, 3, bluePixel);
shapeSquare.setPixel(4, 4, bluePixel);
const {drawShape} = require("../../../resources/drawingLibrary");
drawShape(shapeSquare);  // The image should be the same as in /resources/mixed/exercise2.png

function Shape(width, height) {
    const shape = {
        width: width,
        height: height,
        pixels: [],
        setPixel: function (x, y, pixel) {
            if (!areCoordinatesWithinBounds(x, y, this.width, this.height)) {
                return;
            }
            this.pixels[getArrayIndex(x, y, this.width)] = pixel;
        },
        getPixel: function (x, y) {
            if (!areCoordinatesWithinBounds(x, y, this.width, this.height)) {
                return;
            }
            return this.pixels[getArrayIndex(x, y, this.width)];
        },
        mixPixel: function (x, y, pixel) {
            if (!areCoordinatesWithinBounds(x, y, this.width, this.height)) {
                return;
            }
            this.pixels[getArrayIndex(x, y, this.width)] = this.pixels[getArrayIndex(x, y, this.width)].mixPixel(pixel);
        },
        clearShape: function () {
            let index = 0

            while (index < (width * height)) {
                shape.pixels[index] = Pixel(0, 0, 0, 0)
                index++
            }
        }
    }

    function areCoordinatesWithinBounds(x, y, width, height) {
        return x >= 0 && x < width && y >= 0 && y < height;
    }

    function getArrayIndex(x, y, width) {
        return x + y * width;
    }

    let index = 0

    while (index < (width * height)) {
        shape.pixels.push(Pixel(0, 0, 0, 0));
        index++
    }
    return shape
}


exports.Shape = Shape;




