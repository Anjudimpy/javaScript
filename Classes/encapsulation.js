class Vehicle {
    //Private properties
    #regNumber;

    //constructor
    constructor(name, color, wheels, number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }
//Private Method
#getNumber(number){
    return number;
}
//Method
    getDetails(){
console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    Registration Number is : ${this.#getNumber(this.#regNumber)}
    `);
    }
}

const veh1 = new Vehicle('Scooter', 'Grey', 2, 8879);
console.log(veh1);
veh1.getDetails();
veh1.#getNumber(); //we cant access and modify outside directly because this is private
