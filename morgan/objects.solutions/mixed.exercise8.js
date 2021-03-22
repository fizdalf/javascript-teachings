// Create a function TriangleFilled(width,height,linePixel,fillPixel) this function returns
// the same Triangle as in
// the Triangle function, except now paints the inside of the triangle with fillPixel
const {drawShape, Pixel, Shape} = require("../../resources/drawingLibrary");

function TriangleFilled(width, height, linePixel, fillPixel) {
    const shapeSquare = Shape(width, height);
    const whitePixel = Pixel(255, 255, 255, 255);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToPaint = whitePixel

            if (width <= 2 || height <= 2) {
                pixelToPaint = linePixel;
            }


            const difference = height - 1 - y;
            const possibleY = height - 1 - difference;


            if (y === possibleY && (x === difference || x === width - 1 - difference) &&
                (difference <= width - 1 - difference)) {
                pixelToPaint = linePixel
            }

            if (x >= difference + 1 && x <= width - 2 - difference) {
                pixelToPaint = fillPixel
            }
            if (y === height - 1) {
                pixelToPaint = linePixel

            }
            shapeSquare.setPixel(x, y, pixelToPaint);
        }
    }
    return shapeSquare;
}

const bluePixel = Pixel(0, 0, 255, 255)
const redPixel = Pixel(0, 0, 0, 255)
drawShape(TriangleFilled(50, 50, bluePixel, redPixel))
