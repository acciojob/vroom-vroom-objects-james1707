 function Car(make,model){
    this.make=make;
    this.model=model;

    Car.prototype.getdetails = function(){
        console.log(`${this.make},${this.model}`);
    }
}

function Sportscar (make,model,topSpeed){
    Car.call(this,make,model);
    this.topSpeed = topSpeed;
    Sportscar.prototype.getTopSpeed = function(){
        console.log(`${this.topSpeed}`)
    }
}

Sportscar.prototype = Object.create(Car.prototype);
Sportscar.prototype.constructor = Sportscar;

let car1 = new Car("maruti" ,"wagonR")
let car2 = new Sportscar("lambo", "avent", 300);

car1.getdetails();
car2.getdetails();
car2.getTopSpeed();