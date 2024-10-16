//Find -------------- findIndex

const inputs = [22,13,44,77,65,44,55,65];

const find1 = inputs.find((num)=> num > 65);
console.log(find1); // if number is not persent return undefiend

const find2 = inputs.findIndex((num) => num == 65);
console.log(find2); // if number is not persent return -1