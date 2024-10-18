/**You have been given an array and a number. Your task is to find the number in the array and return the index of that number. If the element is not present in the array return -1. */


function findTheNumber(arr,ele) {
    let answer = -1;
 for(let i=0; i<arr.length; i++){

     if(arr[i] === ele){
         answer = i;
     }
 }
    
    return answer;
}
let arr=[23,43,67,89,62,29];
let ele= 89;
console.log(findTheNumber(arr,ele));