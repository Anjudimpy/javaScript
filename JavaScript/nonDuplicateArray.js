/* You have been provided with two arrays your task is to merge both arrays while
 removing the duplicate elements from the merged array.*/

arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
      let mergeArr = [...arr1, ...arr2];
    let dupArr =[];
    for(let i =0; i<mergeArr.length; i++){
        if(!dupArr.includes(mergeArr[i])){
            dupArr.push(mergeArr[i]);
        }
    }
    return  dupArr;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]