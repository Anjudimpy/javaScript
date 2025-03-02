const car = {

    name: 'car',
    color: 'black',

    getDetails(brand, seats) {
        console.log(`This is a ${this.color} ${this.name} of ${brand} company.
            It has ${seats} seats`);

    },
};

const bus = {
    name: 'bus',
    color: 'blue'
};

car.getDetails('Audi, 5');

//call function

car.getDetails.call(bus, 'Star', 50);

//apply function

car.getDetails.apply(bus, ['Gold', 30]);

//bind Function (reuseable function)

const veh1 = car.getDetails.bind(bus);
veh1('silver', 20);

veh1('red', 10);   // we can call again again


