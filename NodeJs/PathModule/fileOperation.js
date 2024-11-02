const fs = require('fs')
const path = require('path')

//Reading data
const filePath = path.join('src','data.txt')
const filePathResolved = path.resolve('src','data.txt')  // for absolute path
console.log(filePath);
console.log(filePathResolved);
console.log(path.extname(filePathResolved));   // for extention name

fs.readFile(filePathResolved, (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})