// Create a function Circumference(radius,linePixelColor) that returns a Shape with a circumference of the given radius
// and drawn with the given linePixelColor, you can assume background is white
// To make things a bit easier, you can calculate all the positions of the x and y of the pixels with the following
// formulas
// x = cx + (r * cos(angle * PI / 180))
// y = cy + (r * sin(angle * PI / 180))
// Where:
// x        is the x coordinate of the pixel
// cx       is the x coordinate of the position of the center of the circumference
// y        is the y coordinate of the pixel
// cy       is the y coordinate of the position of the center of the circumference
// r        is the radius
// cos      is the cosine (Math.cos)
// sin      is the sine (Math.sin)
// angle    is the angle of the pixel we are trying to draw (


const {Pixel} = require("../resources/drawingLibrary");
const {Shape} = require("../resources/drawingLibrary");
const {drawShape} = require("../resources/drawingLibrary");

function Circumference(radius, linePixelColor) {
    const cx = radius;
    const cy = radius;
    const shape = Shape(radius * 2, radius * 2);

    for (let angle = 0; angle < 360; angle += 1 / radius) {
        let x = Math.floor(cx + (radius * Math.cos(angle * Math.PI / 180)));
        let y = Math.floor(cy + (radius * Math.sin(angle * Math.PI / 180)));
        shape.setPixel(x, y, linePixelColor);
    }

    return shape;
}

//drawShape(Circumference(200,Pixel(255, 0, 0, 255)));
