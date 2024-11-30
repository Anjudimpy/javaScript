class Vehicle{
    static vName = 'staic name';
    constructor(name, color, wheel)
    {
      
        this.name = name;
        this.color = color;
        this.wheel = wheel;
    }

    //method
    getDetails(){
        console.log(`The ${this.name} is ${this.color}. It has ${this.wheel} wheels`)
    }

    //static method
    static showMsg(){
        console.log('THiS is static method');
    }
}

const v1 = new Vehicle('car','red',4);
console.log(v1);
v1.getDetails();

// static method and name only accessable by class name
Vehicle.showMsg();
console.log(Vehicle.vName);