'use strict'

console.log(this);
var user = 'jhon';
console.log(window.user);
console.log(user); //window keyword hidden


function checkThis()
{
    console.log(this);
}

checkThis();
const arrowFun = ()=>{
    console.log(this);
}

arrowFun();

const user1 = {
    username: "Jhon",
    userAge: 12,
    work: function(){
        console.log(this);
    }
}

user1.work();

const user2 = {
    userName: 'Harry',
};

user2.work = user1.work;
// console.log(user2);

user2.work();