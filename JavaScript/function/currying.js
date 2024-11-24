//Currying
function power(b){
    return function(a){
        return a**b;
    };
}

const square = power(2);

console.log(square(4)); //output: 16
console.log(square(5)); //output: 25
console.log(square(8)); //output: 64

const cube = power(3);

console.log(cube(4)); //output: 64
console.log(cube(5)); //output: 125
console.log(cube(8)); //output: 512
