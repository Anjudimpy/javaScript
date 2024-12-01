const user1= {
    username: 'Sara',
    age: 12,
    marks: {
        math: 20,
        eng: 25,
    },
}

//shallow Copy
console.log("shallow Copy");

const user2 = {...user1}
user2.username = 'Harry';
 user2.marks.math = 10; 
console.log(user1);
console.log(user2);

//deep Copy;

console.log("deep Copy");

const user3 = JSON.parse(JSON.stringify(user1));
user3.username = 'Hari';
user3.marks.math = 30; 
console.log(user1);
console.log(user3);