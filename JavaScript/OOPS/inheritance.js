class Vehical {
    constructor(name, color, wheel){
        this.name = name;
        this.color = color;
        this.wheel = wheel;
    }

    getDetails(){
        console.log(`The  ${this.name} is ${this.color}.
        It has ${this.wheel} wheels.
        Brand of car ${this.brand}`)
    }
}

class Car extends Vehical{

    constructor(color,brand, purpose){
        super('car',color,4);
        this.brand = brand;
        this.purpose = purpose;
    }
    getDetails1(){
        console.log(`The  ${this.name} is ${this.color}.
        It has ${this.wheel} wheels.
        Brand of car ${this.brand}
        It is for ${this.purpose}`)
    }
}

const car1 = new Car('red', 'Audi','Luxury Travel');
car1.getDetails();
car1.getDetails1();
console.log(car1);