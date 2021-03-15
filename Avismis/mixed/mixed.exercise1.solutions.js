// Create a function Pixel(r,g,b,a) that receives 3 numbers from 0-255 that returns an object that models a pixel in your screen,
// it has the following properties and methods
// Pixel
//  - Properties
//      + R                     This is a number that determines the Red color value of the pixel (0-255)
//      + G                     This is a number that determines the Green color value of the pixel (0-255)
//      + B                     This is a number that determines the Blue color value of the pixel (0-255)
//      + A                     This is a number that determines the Alpha channel value of the pixel (0-255) (0 means transparent, 255 means solid)
//  - Methods
//      + mixPixel(otherPixel)  This is a method that receives another pixel and returns a new pixel where the each color component will be the average
//      of the two pixel components values
// Examples
// const pixel1 = Pixel(20,250,177);
// const pixel2 = Pixel(255,20,250)
// console.log(pixel1.R) -> 20
// const pixel3 = pixel1.mixPixel(pixel2);
// console.log(pixel3.G) -> 135
'use strict'

function Pixel(r,g,b,a){
    return pixel = {
        r: 20,
        g: 250,
        b: 177,
        a: 150,
        mixPixel: function (pixel2){
            pixel2 = {
                r2: 177,
                g2: 250,
                b2: 20,
                a2: 150,
            }
            let newColorR = (r + r2) / 2
            let newColorG = (g + g2) / 2
            let newColorB = (b + b2) / 2
            let newColorA = (a + a2) / 2

            pixel3 = {
                r3: newColorR,
                g3: newColorG,
                b3: newColorB,
                a3: newColorA,
            }
            return pixel3

    }

    }
}

exports.Pixel = Pixel;
