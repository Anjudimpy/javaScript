//class expressions

const VehicleCl = class {

}


// Class should be start with capital latter
//class declaration
class Vehicle {
    //properties
    name;
    color;
    wheels;

    //constructor
    constructor(name, color, wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    //methods
    getDetails(){
        console.log(
            `The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`
        );
    }
}

const veh1 = new Vehicle("Scooter", "red", 2);
console.log(veh1);
veh1.getDetails();