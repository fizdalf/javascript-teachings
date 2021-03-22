// Create a function Smiley(size, linePixelColor, fillPixelColor) that returns a Shape with a smiley face in it
// you can as assume width = height = size use the linePixelColor for the lines and fillPixelColor for the fill of the
// smiley
const {Shape, drawShape, Pixel} = require("../resources/drawingLibrary");

const {Circle} = require('./mixed.exercise10');

function Smiley(size, linePixelColor, fillPixelColor) {
    const circle = Circle(size, linePixelColor, fillPixelColor);


    drawCircle(size / 2, size / 2, 10, circle);
    drawCircle(size * 1.5, size / 2, 10, circle);
    drawArch(size, size, 25, 0, 180, circle);

    function drawCircle(cx, cy, radius, shape) {
        for (let angle = 0; angle < 360; angle += 1 / radius) {
            let x = Math.floor(cx + (radius * Math.cos(angle * Math.PI / 180)));
            let y = Math.floor(cy + (radius * Math.sin(angle * Math.PI / 180)));
            shape.setPixel(x, y, linePixelColor);
        }

        for (let internalRadius = radius - 1; internalRadius > 0; internalRadius--) {
            for (let angle = 0; angle < 360; angle += 1 / internalRadius) {
                let x = Math.floor(cx + (internalRadius * Math.cos(angle * Math.PI / 180)));
                let y = Math.floor(cy + (internalRadius * Math.sin(angle * Math.PI / 180)));
                shape.setPixel(x, y, fillPixelColor);
            }
        }
    }

    function drawArch(cx, cy, radius, startAngle, endAngle, shape) {
        for (let angle = startAngle; angle < endAngle; angle += 1 / radius) {
            let x = Math.floor(cx + (radius * Math.cos(angle * Math.PI / 180)));
            let y = Math.floor(cy + (radius * Math.sin(angle * Math.PI / 180)));
            shape.setPixel(x, y, linePixelColor);
        }
    }

    return circle;
}

drawShape(Smiley(50, Pixel(0, 0, 0, 255), Pixel(255, 255, 0, 255)))

