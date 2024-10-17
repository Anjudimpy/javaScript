/* Create a JavaScript function called lastDigit that takes two numbers, num1 and num2,
 as arguments. The function should determine whether the last digit of both numbers is equal. 
 If the last digits are equal, the function should return true; otherwise, it should return false. */

function lastDigit(num1, num2)
{
    let result;
    if(num1%10 === num2%10){
        result = true;
}else{
    result = false;
}
    return result;
}
console.log(lastDigit(29,19));