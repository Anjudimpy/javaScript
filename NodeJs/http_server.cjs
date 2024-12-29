//1. Import http library/ module
const http = require('http');

// 2. Create server
const server = http.createServer((req, res) =>{
          res.end("Welcome to NodeJS Nijas server");
});

server.listen(3100,()=>{
    console.log("Server is listing on port 3100");
})