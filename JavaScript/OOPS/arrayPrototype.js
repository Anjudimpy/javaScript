const inputs = [1, 2, 3, 4, 5];

console.log(inputs.__proto__);
console.log(inputs.__proto__.__proto__);

//Object Create

const car = {
    getDetails(name) {
        console.log(`Your car is ${name}`);
    },
};

const car1 = Object.create(car);
console.log(car1.__proto__);
car1.getDetails('Audi');


//Object.assign