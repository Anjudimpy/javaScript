class Vehicle {
    constructor(name, color, wheels){
       this.name = name;
       this.color = color;
       this.wheels = wheels;
    }

 getDetails() {
     console.log(`
            The ${this.name} is ${this.color} in color.
            It has ${this.wheels}
            `)
  }
}

class Car extends Vehicle{
    constructor(color, brand, purpose)
    {
       super('car',color, 4);
       this.brand = brand;
       this.purpose = purpose;  
    }
}

const car1 = new Car(
    'Red',
    'Audi',
    'Luxury Travelling'
);
console.log(car1);
car1.getDetails();

document.getElementsByClassName