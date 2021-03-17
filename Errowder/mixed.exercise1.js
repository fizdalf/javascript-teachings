// Create a function Pixel(r,g,b,a) that receives 3 numbers from 0-255 that returns an object that models a pixel in your screen, it has the following properties and methods
// Pixel
//  - Properties
//      + R                     This is a number that determines the Red color value of the pixel (0-255)
//      + G                     This is a number that determines the Green color value of the pixel (0-255)
//      + B                     This is a number that determines the Blue color value of the pixel (0-255)
//      + A                     This is a number that determines the Alpha channel value of the pixel (0-255) (0 means transparent, 255 means solid)
//  - Methods
//      + mixPixel(otherPixel)  This is a method that receives another pixel and returns a new pixel where the each color component will be the average of the two pixel components values
// Examples
// const pixel1 = Pixel(20,250,177);
// const pixel2 = Pixel(255,20,250)
// console.log(pixel1.R) -> 20
// const pixel3 = pixel1.mixPixel(pixel2);
// console.log(pixel3.G) -> 135

function Pixel(r, g, b, a) {
    return {
        R: r,
        G: g,
        B: b,
        A: a,
        mixPixel: function (otherPixel) {
            return Pixel(
                (this.R + otherPixel.R) / 2,
                (this.G + otherPixel.R) / 2,
                (this.B + otherPixel.R) / 2,
                (this.A + otherPixel.R) / 2,
            )
        }
    }
}
console.log(Pixel(0,0,0,0).mixPixel((Pixel(255,255,255,255))))
exports.Pixel = Pixel;