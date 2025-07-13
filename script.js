 class Car {
	 constructor (make,model){
		 this.make = make;
		 this.model - model;
	 }
	 getMakeModel(){
		 console.log(`this is a ${car.make} ${this.model}`)
	 }
 }

class Sportscar extends Car {
	constructor (make,model,topSpeed){
		this.topSpeed = topSpeed;
	}
	getTopSpeed(){
		console.log(`${car.topspeed}`)
	}
}

let car1 = new Car("ferrari","tesora");
let car2 = new Sportscar("lambo","aventador","300");

car1.getMakeModel();