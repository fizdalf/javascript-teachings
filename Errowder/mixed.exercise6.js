//Create a drawing that grows according to the size of width and height from the previous exercises

const {drawComposition} = require("../resources/drawingLibrary")
const {Pixel} = require("./mixed.exercise1");
const {Square} = require("./mixed.exercise3");
const {ShapePosition} = require("./mixed.exercise4.solutions");
const {DrawingComposition} = require("./mixed.exercise5")

const newComposition = DrawingComposition(16,34)
const redPixel = Pixel(255,0,0,255)
const greenPixel = Pixel(0,255,0,255)
const bluePixel = Pixel(0,0,255,255)
const yellowPixel= Pixel(255,255,0,255)
const pinkPixel = Pixel(255,0,127,255)
const whitePixel = Pixel(255,255,255,255)
const greenAndWhiteSquare = Square(9,9,greenPixel,whitePixel)
const blueAndWhiteSquare = Square(9,9,bluePixel,whitePixel)
const redAndWhiteSquare = Square(9,9,redPixel,whitePixel)
const yellowAndWhiteSquare = Square(9,9,yellowPixel,whitePixel)
const pinkAndWhiteSquare = Square(9,9,pinkPixel,whitePixel)

newComposition.addShape(1,1,blueAndWhiteSquare);
newComposition.addShape(7,7,yellowAndWhiteSquare);
newComposition.addShape(13,1,pinkAndWhiteSquare);
newComposition.addShape(19,7,greenAndWhiteSquare);
newComposition.addShape(25,1,redAndWhiteSquare);

drawComposition(newComposition);








