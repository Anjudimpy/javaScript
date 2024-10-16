const fruits = [
    'Apple',
    'Mango',
    'Kiwi',
    'Berry',
    'Banana',
    'Lichi'
]

//Binding Pattern

// const [a, , , b] =fruits; // for skip element give ( ,)
// console.log(a, b);

//const [a, m,...f] = fruits;
//console.log(f);
// const [a,m, ...[,be, ba]] = fruits; // for apple, mango, berry and banana
// console.log(ba);
// console.log(a);

let a =10;
let b = 20;
[a,b] = [b,a]; //using array destructuring we can swap two numbers without using any third temproray variable
console.log(a,b);

let n = [2,5,7];
let mn= Math.max.apply(null,n);
console.log(mn)