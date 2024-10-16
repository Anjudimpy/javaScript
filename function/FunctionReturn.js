
// Function Returning a Function
function greet(message){
    return function (wish){
        console.log(`${wish}, ${message}`);
    }
}

// const greeting = greet("I hope you doing well!");
// greeting('Hello');
greet("I hope you doing well!")("HI");