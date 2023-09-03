import { Circle } from "./Circle";
import { Rectangle } from "./Reactangle";
import { Shape } from "./Shape";


let myShape= new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());

let myrectangle = new Rectangle(0,0,3,7);
console.log(myrectangle.getInfo());