// You're building a basic expense tracker program. The idea is to add new expenses, provided as a number, to the existing array of expenses. After doing this, the program should give you the updated array.

function addExpense(newExpense , originalExpenseArray) {
     
    originalExpenseArray.push(newExpense);

    return originalExpenseArray;
   
}

let expenses = [340, 567, 434, 653];

console.log(addExpense(543, expenses));