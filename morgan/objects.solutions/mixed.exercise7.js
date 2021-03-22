// Create a function Triangle(width, height,linePixel)
// that returns a Shape with white background an a triangle in it
// the color of the line should be the one given by linePixel


const {drawShape, Pixel, Shape} = require("../../resources/drawingLibrary");

function Triangle(width, height, linePixel) {
    const shapeSquare = Shape(width, height);
    const whitePixel = Pixel(255, 255, 255, 255);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToPaint = whitePixel

            if (width <= 2 || height <= 2) {
                pixelToPaint = linePixel;
            }

            if (y === height - 1) {
                pixelToPaint = linePixel

            }

            const difference = height - 1 - y;
            const possibleY = height - 1 - difference;


            if (y === possibleY && (x === difference || x === width - 1 - difference) && (difference <= width - 1 - difference)) {
                pixelToPaint = linePixel

            }


            shapeSquare.setPixel(x, y, pixelToPaint);
        }
    }
    return shapeSquare;
}

    const bluePixel = Pixel(0, 0, 255, 255)
const redPixel = Pixel(255, 0, 0, 255)
    drawShape(Triangle(50, 50, bluePixel))