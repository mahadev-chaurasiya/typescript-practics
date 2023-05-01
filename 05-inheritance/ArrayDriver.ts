import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 20);
let myCircle = new Circle(30, 40, 50);
let myRectangle = new Rectangle(1,23,4,56);
let theShape: Shape[] = [];
theShape.push(myShape);
theShape.push(myCircle)
theShape.push(myRectangle);

for(let tmpShapes of theShape){
    console.log(tmpShapes.getInfo());
}
