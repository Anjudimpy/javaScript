/**You are tasked with creating a program that processes an array of positive integers. Your goal is to find the sum of all even numbers 
  in the array, but you need to implement a special condition: if you encounter a number that is a multiple of 5, you should skip it and 
 move on to the next element without */

 function sumOfArray(arr){
    let count =0;
for(let i=0; i<arr.length; i++){
  
if(arr[i] % 2 !== 0 || arr[i]%5 === 0){
continue;
}
  count += arr[i];
}
return count;
     }
             
let arr = [1,6,8,3,5,20,10];
console.log(sumOfArray(arr));