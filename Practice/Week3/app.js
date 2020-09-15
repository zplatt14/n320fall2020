//general animal class
class Animal{
    constructor(height, weight, color){
        this.height = height;
        this.weight = weight;
        this.color = color;
    }
}
//zebra extends the characteristics of animal, but the color is set to black and white
class Zebra extends Animal{
    constructor(height, weight){
        super(height,weight)
        this.color = "black and white";
    }
}

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    crank(engine){
        engine.start(this);
    }
}

class Engine{
    constructor(displacement){
        this.displacement = displacement;
    }
    start(car){
        console.log("the car has been started");
    }
}

let car = new Car("honda","civic");
let engine = new Engine("2.0");

car.crank(engine);