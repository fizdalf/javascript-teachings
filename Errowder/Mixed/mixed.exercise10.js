// Create a function Circle(radius,linePixelColor, fillPixelColor) that returns a Shape with a circumference of the given radius
// and drawn with the given linePixelColor, you can assume background is white, and fill the circumference with the given
// fillPixelColor

const {Shape, drawShape, Pixel} = require("../../resources/drawingLibrary");

function Circle(radius, linePixelColor, fillPixelColor) {
    const cx = radius + 1;
    const cy = radius + 1;
    const shape = Shape(radius * 2 + 2, radius * 2 + 2);

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

    return shape;
}
exports.Circle = Circle;
// drawShape(Circle(500, Pixel(255, 0, 0, 255), Pixel(0, 255, 0, 255)));
