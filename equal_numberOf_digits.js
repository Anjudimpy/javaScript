// Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should 
//determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.

function commonDigits(num1, num2)
{
    let result;
    let count1 =0;
    let count2 =0;
    for(let i =1; num1>0;  i++){
       num1= Math.floor(num1/10);
        count1++;
    }
    
    for(let i =1; num2>0;  i++){
        num2 = Math.floor(num2/10);
        count2++;
    }
    
    if( count1 === count2){
        result = true;
    }
    else{
        result = false;
    }
    
    return result;
    
}
console.log(commonDigits(74847, 77854));
console.log(commonDigits(748, 77854));