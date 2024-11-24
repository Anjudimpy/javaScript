let arr = [4, 2, 34, 4, 1, 12, 1, 4];

function nonDuplicate(arr) {
    return arr.filter((num, index, array) => array.indexOf(num) === array.lastIndexOf(num));
}

console.log(nonDuplicate(arr)); // Output: [2, 34, 12]

//2.



// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function nondDuplicate(arr){
// //Implement your function    
//     for(let i of arr){
//         if(arr.indexOf(i) === arr.lastIndexOf(i))
//             {
//                console.log(i) 
//             }
// }
// }    
// console.log(nondDuplicate(arr));