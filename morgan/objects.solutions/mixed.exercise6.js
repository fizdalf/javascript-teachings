

function CrazyShape(height, width, linePixel, fillPixel) {
    const shapeSquare = Shape(width, height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToPaint = fillPixel;
            if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
                pixelToPaint = linePixel;
            }
            shapeSquare.setPixel(x, y, pixelToPaint);
        }
       let  xCenterPosition = Math.floor(width/2)
        let shapeSquareWithLine = shapeSquare + linePixel(xCenterPosition)
    }
    return  shapeSquareWithLine;



}

