// Create a function Circumference(radius,linePixelColor) that returns a
// Shape with a circumference of the given radius
// and drawn with the given linePixelColor, you can assume background is white
// To make things a bit easier, you can calculate all the positions of the x and y of the pixels
// with the following
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


function Circumference(radius, linePixelColor) {
    let r = radius
    let d = r * 2
    let width = d + 2
    let height = d + 2
    let cx = Math.ceil(width/2)
    let cy = Math.ceil(height/2)
    let cos = Math.cos
    let sin = Math.sin
    let angle = 360
    let pi = 3.14
    let whitePixel = Pixel(255, 255, 255 ,255)
    const shapeSquare = Shape(width, height);
    for(let x = 0; x <= width; x++){
        for(let y = 0; y <= height; y++){

           let pixelToPaint = whitePixel



            shapeSquare.setPixel(x,y, pixelToPaint)

        }
    }

return shapeSquare;

}

// EXAMPLE:
 const {Pixel, drawShape,Shape} = require("../../resources/drawingLibrary");

 drawShape(Circumference(10, Pixel(255, 0, 0, 255)))
