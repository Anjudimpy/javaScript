class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){ // get should not have parameter
        return this.radius*2;
    }

    set diameter(newDiameter) { // set should have atleast one parameter
        if(newDiameter >= 0){
          this.radius = newDiameter/2;
        }else{
            console.log(`Invalid Diameter`);
        }
    }
}

const circle = new Circle(2);
console.log(circle.diameter);
circle.diameter = 10; // using set method it is posiible
console.log(circle.radius);
console.log(circle.diameter);
