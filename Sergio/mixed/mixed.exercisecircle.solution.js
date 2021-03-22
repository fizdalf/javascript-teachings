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

const {Pixel} = require("./mixed.exercise1.solution");
const {Shape} = require("./mixed.exercise2.solution");
const {drawShape} = require("../../resources/drawingLibrary");


function Circumference(cx, cy, radius, angle, linePixelColor, fillPixel) {
    const shapeCircumference = Shape(cx, cy, radius, angle, linePixelColor);
    const x = cx + (radius * Math.cos(angle * Math.PI / 180))
    const y = cy + (radius * Math.cos(angle * Math.PI / 180))
    let pixelToPaint = fillPixel;
    if(x>=2 && x<=radius-3){
        pixelToPaint = linePixelColor;
    }
    return shapeCircumference
}
drawShape(Circumference(1, 2, 8, 360), Pixel(255, 0, 0, 255))