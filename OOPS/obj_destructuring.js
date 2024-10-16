const obj = {
    a: 1,
    b: 2,
    c: ['O', 'B', 'J'],
    d: {value: 'Val'},
};

//Binding Pattern Destructring
// const {a,b,c} = obj; //object destructring
// console.log(a);
// console.log(c);


const {a: a1} =obj; // object destructure with rename
console.log(a1);


//Assignment Pattern Destructring

let b;
({b: b} = obj);
console.log(b);