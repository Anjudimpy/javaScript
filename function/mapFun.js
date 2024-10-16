//Map Function: return manipulated array

const inputs = [2,4,6,8,7];

// const squaryArray=inputs.map(function (currentElement)
// {
//     return currentElement*currentElement;
// });

const squaryArray = inputs.map((num)=>num*num);

console.log(squaryArray);