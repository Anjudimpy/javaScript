//1. Import readline
const readline = require('readline');

//2. configure interface to connect with terminal/command line.

const interfaces = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//3. reading values.
interfaces.question("Enter first number: ",(num1) =>{
    interfaces.question("Enter second number: ", (num2) =>{
        interfaces.question("select operator (+,-,*,/): ",(op) =>{
            let output;
            if(op == "+"){
              output = Number(num1) + Number(num2);
            } else if(op == "-") {
              output = Number(num1) - Number(num2);
            } else if(op == "*"){
              output = Number(num1) * Number(num2);
            } else if(op == "/"){
              output = Number(num1) / Number(num2);
            } else{
              output = "Invalid";
            }

        
            console.log(output);
        })
    })
});