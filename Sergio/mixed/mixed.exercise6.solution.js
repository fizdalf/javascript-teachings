const {Pixel} = require("./mixed.exercise1.solution");
const {Shape} = require("./mixed.exercise2.solution");
const {drawShape} = require("../../resources/drawingLibrary");


function crazyShape(height, width, linePixel, fillPixel){
    const shapeHexvastic = Shape(width, height);

    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            let pixelToPaint = fillPixel;
            const halfWidth = width / 2;
            const halfHeight = height / 2;

            if (
                (y === height - 1 && (x === 0 || x > halfWidth))
                ||
                (y === halfHeight) || (x === halfWidth)
                ||
                (y === 0 && (x <= halfWidth || x === width - 1))
                ||
                (x === 0 && (y === 0 || y > halfHeight))
                ||
                (x === width - 1 && (y === height - 1 || y < halfHeight))
            ) {
                pixelToPaint = linePixel;
            }
            shapeHexvastic.setPixel(x, y, pixelToPaint);
        }
    }
    return shapeHexvastic
}

drawShape(crazyShape(5,6), Pixel(0,0,0,255), Pixel(255,255,255,255))