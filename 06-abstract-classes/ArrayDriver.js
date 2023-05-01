"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var myShape = new Shape_1.Shape(10, 20);
var myCircle = new Circle_1.Circle(30, 40, 50);
var myRectangle = new Rectangle_1.Rectangle(1, 23, 4, 56);
var theShape = [];
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tmpShapes = theShape_1[_i];
    console.log(tmpShapes.getInfo());
}
