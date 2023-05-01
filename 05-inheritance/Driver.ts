import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 20);
console.log(myShape.getInfo());
let myCircle = new Circle(30, 40, 50);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle(1,23,4,56);
console.log(myRectangle.getInfo());