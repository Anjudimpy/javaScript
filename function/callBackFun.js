// CallBack Function : A function used as a parameter

function greet(wish) {
    console.log(`${wish()}, Welcome to the JavaScript Coures`);
}

function sayHi()
{
    return 'Hi!';
}
function sayHello()
{
    return 'Hello';
}

function goodMorning()
{
    return 'Good Morning!';
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);