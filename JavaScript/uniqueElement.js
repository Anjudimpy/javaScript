let arr = [4, 2, 34, 4, 1, 12, 1, 4];

function nonDuplicate(arr) {
    return arr.filter((num, index, array) => array.indexOf(num) === array.lastIndexOf(num));
}

console.log(nonDuplicate(arr)); // Output: [2, 34, 12]
