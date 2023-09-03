import { Circle } from "./Circle";
import { Rectangle } from "./Reactangle";
import { Shape } from "./Shape";


let myShape= new Shape(10,15);
let myCircle = new Circle(5,10,20);
let myrectangle = new Rectangle(0,0,3,7);


//declare an array of shapes .... intially empty

let theShapes: Shape[]=[];

// add the shapes to the array 

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myrectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}

