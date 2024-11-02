//Creating and writing a file.
const fs = require('fs')
try{
    fs.writeFileSync('employee.txt', 'Name: Jone Doe Age: 40 Position: Manager')

}catch(err)
{
   console.log(err)
}

//Append another employee data
fs.appendFileSync('employee.txt', 'Name: David Age: 55 Position: Hr')

//Delete a file 

try{
 fs.unlinkSync('employee.txt');
}catch(err){
    console.log("File does't exist ")
}

console.log('This another operation being performed')