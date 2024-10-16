//Higher Order Function:- Acceps a function as argument
//                      - Function return as a output

const inputs = [2, 3, 4, 5, 6, 7, 8, 12, 1, 4, 16];

/*
function square(input)
{
    const squared = [];
    for(let num of input){
        squared.push(num*num);
    }

    return squared;
}

function cubic(input)
{
    const cubes = [];
    for(let num of input){
        cubes.push(num*num*num);
    }

    return cubes;
}

console.log(square(inputs));
console.log(cubic(inputs)); */

function operation (input, fn)
{
    const output = [];
    for(let num of input)
    {
     output.push(fn(num));
    }
    return output;
}

function square(number){
    return number*number;
}

function cubes(number)
{
    return number*number*number;
}

console.log(operation(inputs, square));
console.log(operation(inputs, cubes));


