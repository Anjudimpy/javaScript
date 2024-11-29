class VehicleCl {
    //Private properties
    #regNumber;
    //constructor
    constructor(name, color, wheels, number){
        
       this.name = name;
       this.color = color;
       this.wheels = wheels;
       this.#regNumber = number;
    }
 //Prvate method

 #getRegNumber(number){
    return number;
}
    //methods

    getDetails() {
        console.log(`The ${this.name} is ${this.color} in color
            It has ${this.wheels} wheels and Registration Number ${this.#getRegNumber(this.#regNumber)}`)
    }

   

}

const car1 = new VehicleCl("Audi",'red', 4,45556);
car1.name = 'asa';
//car1.#regNumber = 987 // can't access outside ..this is private member
car1.getDetails();