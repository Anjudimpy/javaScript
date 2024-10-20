/**Create a closure function that generates unique registration numbers in the following format:

A_2023_1   // For first call
A_2023_2   // For second call */

function generateID(start){
    let count = start;
    return function closure(){
       const id = `A_2023_${count}`;
       count++;
       return id;
    }
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100
