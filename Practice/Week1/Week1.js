var hondaCivic = {
    Year: 2007, 
    Doors: 2, 
    Color: "Blue",
    Transmission: "Manual"
}
console.log(hondaCivic);

class Car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vroom(){
        console.log(this.model + " vrooms");
    }

}

var newCar = new Car("Honda","Civic",2020);
newCar.vroom();
console.log(newCar);

class Honda extends Car{
    constructor(make,model,year){
        super(make,model,year);
        
    }
    fromWhere(){
        console.log(this.make + " is a Japanese car");
    }
}

let newAccord = new Honda("Honda","Accord",2020)
console.log(newAccord);
newAccord.fromWhere();
