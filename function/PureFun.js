// Pure Function

function calculate(num1, num2)
{
    return num1*num2;
}

console.log(calculate(4,6));  // output dependend only input

//impure function depend on external value
// eg:-

const discount = 25;
function calc(price)
{
    return price - discount; // output depend on external value(discount)
}

console.log(calc(90));