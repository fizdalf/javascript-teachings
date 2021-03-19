'use strict';

exports.drawShape = (shape) => {
    const {createCanvas} = require('canvas');

    const width = shape.width
    const height = shape.height;

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    context.fillStyle = '#000'
    context.fillRect(0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height);
    let index = 0;
    while (index < (shape.width * shape.height)) {
        const x = index % width;
        const y = Math.floor(index / width);
        setPixel(shape.getPixel(x, y), x, y, width, imageData.data);
        index++;
    }
    context.putImageData(imageData, 0, 0);
    printFile(canvas);
}

function getPixel(x, y, canvasWidth, pixelData) {
    const [redIndex, greenIndex, blueIndex, alphaIndex] = getColorIndicesForCoord(x, y, canvasWidth);
    return {R: pixelData[redIndex], G: pixelData[greenIndex], B: pixelData[blueIndex], A: pixelData[alphaIndex]};
}

function getColorIndicesForCoord(x, y, width) {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
}

function setPixel(pixel, x, y, canvasWidth, pixelData) {
    const [redIndex, greenIndex, blueIndex, alphaIndex] = getColorIndicesForCoord(x, y, canvasWidth);
    pixelData[redIndex] = pixel.R;
    pixelData[greenIndex] = pixel.G;
    pixelData[blueIndex] = pixel.B;
    pixelData[alphaIndex] = 255;
}

exports.drawComposition = (composition) => {
    const {createCanvas} = require('canvas');

    const width = composition.width
    const height = composition.height;

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    context.fillStyle = '#000'
    context.fillRect(0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            setPixel(composition.getPixelAt(x, y), x, y, width, imageData.data);
        }
    }
    context.putImageData(imageData, 0, 0);
    printFile(canvas);
}

function printFile(canvas) {
    const fs = require('fs');
    const imagePath = 'image.png';
    fs.writeFileSync(imagePath, canvas.toBuffer('image/png'));
    const openExplorer = require('open-file-explorer');
    openExplorer(process.cwd() + "\\" + imagePath);
}


function Pixel(r, g, b, a) {
    return {
        R: r,
        G: g,
        B: b,
        A: a,
        mixPixel: function (otherPixel) {
            return Pixel(
                (this.R + otherPixel.R) / 2,
                (this.G + otherPixel.G) / 2,
                (this.B + otherPixel.B) / 2,
                (this.A + otherPixel.A) / 2,
            )
        },
    }
}

function Shape(width, height) {

    const obj = {
        width,
        height,
        pixels: [],
        setPixel(x, y, pixel) {
            if (x < 0 || x > this.width) {
                return;
            }
            if (y < 0 || y > this.height) {
                return;
            }
            this.pixels[x][y] = pixel;
        },
        getPixel(x, y) {
            if (x < 0 || x > this.width) {
                return;
            }
            if (y < 0 || y > this.height) {
                return;
            }
            return this.pixels[x][y]
        },
        mixPixel(x, y, pixel) {
            const oldPixel = this.getPixel(x, y);
            if (!oldPixel) {
                return;
            }
            this.setPixel(x, y, oldPixel.mixPixel(pixel))
        },
        clearShape() {
            this.pixels = (new Array(width)).fill(null).map(() => (new Array(height)).fill(null).map(() => Pixel(0, 0, 0, 0)))
        }
    }
    obj.clearShape();
    return obj;
}

function Square(width, height, linePixel, fillPixel) {
    const shapeSquare = Shape(width, height);
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixelToSet = fillPixel;
            if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
                pixelToSet = linePixel;
            }
            shapeSquare.setPixel(x, y, pixelToSet);
        }
    }
    return shapeSquare;
}

function ShapePosition(x, y, shape) {
    return {
        x,
        y,
        shape
    }
}

function DrawingComposition(width, height) {
    return {
        width,
        height,
        shapePositions: [],
        addShape(x, y, shape) {
            this.shapePositions.push(ShapePosition(x, y, shape));
        },
        getPixelAt(x, y) {
            if (x < 0 || x > this.width) {
                return;
            }
            if (y < 0 || y > this.height) {
                return;
            }

            let shapePositions = this.shapePositions.filter(sp => {
                return x >= sp.x && x <= sp.x + sp.shape.width - 1 && y >= sp.y && x <= sp.y + sp.shape.height - 1
            })
            const calculatedPixel = shapePositions.reduce(
                (pixel, shapePosition) => {
                    const currentPixel = shapePosition.shape.getPixel(x - shapePosition.x, y - shapePosition.y);
                    if (pixel) {
                        return pixel.mixPixel(currentPixel);
                    }
                    return currentPixel;
                },
                null
            )
            return calculatedPixel || Pixel(0, 0, 0, 0);
        }
    }
}

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

exports.Triangle = Triangle;
exports.Pixel = Pixel;
exports.Shape = Shape;
exports.Square = Square;
exports.ShapePostion = ShapePosition;
exports.DrawingComposition = DrawingComposition;
