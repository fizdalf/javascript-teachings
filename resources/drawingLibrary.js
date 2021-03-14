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
    shape.pixels.forEach((pixelRow, y) => {
        pixelRow.forEach((pixel, x) => {
            setPixel(pixel, x, y, width, imageData.data)
        })
    })
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
