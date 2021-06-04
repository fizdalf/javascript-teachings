// Create a CrazyShape function that returns a Shape object with a drawing inside, it should grow and shrink if required
const {Pixel} = require("./library");
const {drawShape} = require("../../../resources/drawingLibrary");
const {Shape} = require("./library");

function CrazyShape(height, width, linePixel, fillPixel) {
    const shapeSquare = Shape(width, height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToPaint = fillPixel;
            const halfWidth = width / 2;
            const halfHeight = height / 2;

            if (
                (x === 0 && (y === 0 || y > halfHeight))
                ||
                (x === width - 1 && (y === height - 1 || y < halfHeight))
                ||
                (y === 0 && (x <= halfWidth || x === width - 1))
                ||
                (y === height - 1 && (x === 0 || x > halfWidth))
                ||
                (y === halfHeight) || (x === halfWidth)
            ) {
                pixelToPaint = linePixel;
            }
            shapeSquare.setPixel(x, y, pixelToPaint);
        }
    }
    return shapeSquare;
}
