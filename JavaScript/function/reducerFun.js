//reduce

//reduce(redFn, initial, value);

//function redFn(accumulator, currentValue, currentIndex, arr)

// const inputs = [2,3,4,5,6];

// const sum = inputs.reduce((total, num, index)=> {
//     console.log(total, index);
//     return total + num 
// },0)
// console.log(sum);
const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  
  function mapContactsToCompanies(contacts) {
      
      return contacts.reduce((obj, contact)=>{
      if (!obj[contact.company]) {
        obj[contact.company] = []; 
      }
  
      obj[contact.company].push(contact.name);
          
          return obj;
      },{});
  
  }
  const result = mapContactsToCompanies(contacts);
  console.log(result);