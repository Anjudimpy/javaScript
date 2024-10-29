//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str){
    //Implement Your function here
    let result ="";
    for(let i = str.length-1; i>=0; i--){
        result += str[i];
    }
    return result;
    }
    console.log(reverseString("Hello"));
    //Output : "olleH"