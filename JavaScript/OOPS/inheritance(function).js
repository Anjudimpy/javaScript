function Vehicle(name, color, wheels){
this.name = name;
this.color = color;
this.wheels = wheels;
}

Vehicle.prototype.getVehicle = function(){
    console.log(`The ${this.name} is ${this.color}. It has ${this.wheels} wheels`)
}


function Car(name, color, wheels, brand, seats){
    Vehicle.call(this, name, color, wheels);
    this.brand = brand;
    this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function()
{
    console.log(`The ${this.name} is of ${this.brand} company. Its ${this.color} color. It has ${this.wheels} wheels. It has ${this.seats} seats`)
}

const c1 = new Car('car','red',4,'Audi',5);
c1.getDetails();
c1.getVehicle();
console.log(c1.__proto__)