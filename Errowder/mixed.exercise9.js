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
    const r = radius
    let width = r * 2 + 2
    let height = r * 2 + 2
    const SquareShape = Shape(width, height)
    let angle = linePixelColor
    const cx = Math.ceil(width - 1 / 2)
    const cy = Math.ceil(height - 1 / 2)
    const PI = 3.14
    const cos = Math.cos
    const sin = Math.sin
    const whitePixel = Pixel(255,255,255,255)


    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height ; y++) {
            let pixelToPaint = whitePixel

            if(){}
            SquareShape.setPixel(x,y,pixelToPaint)
        }
    }
    return SquareShape;
}

drawShape(Circumference(10, Pixel(255, 0, 0, 255)))
