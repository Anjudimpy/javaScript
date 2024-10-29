// You have been provided with an array your task is to find all the duplicate elements and return them in form of an array

//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
  let  dupArr =[];
//Implement your function here
    for(let i =0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
         if (arr[i] === arr[j] && !dupArr.includes(arr[i])) { 
        dupArr.push(arr[i]);
      }
        }
     }
 return dupArr
}    
console.log(findDuplicate(arr));