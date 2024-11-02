const fs = require('fs')

//Reading data
fs.readFile('data.txt', (err,data) => {
    if (err){
      console.log(err)
    } else {
        console.log(data.toString())
    }
})

//Write data
fs.writeFile("employee.txt", "New Employee", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('File is written')
    }
})

//append file
fs.appendFile('employee.txt','\nAnother Employee', (err) =>{
    if(err){
        console.log(err);
    } else {
        console.log('File is updated')
    }
})

//Delete File

fs.unlink("employee.txt", (err) =>{
    if(err){
        console.log(err)
    } else {
        console.log("File is delete")
    }
})

console.log("This is another operation")
