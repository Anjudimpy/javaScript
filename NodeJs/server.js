//create a server using NODEJS

//1. Import http library/ module
const http = require('http');

//2. Create Server.
const server =  http.createServer((req, res) =>{

    console.log(req.url);
    res.write('Welcome to my application')
   if(req.url == '/product'){
    //request ends
    res.end("This is product page");
   }
   else if(req.url == '/user'){
    res.end('This is User page');
   }
  //loging
});

//3. Specify a port to listen to client's requests.
server.listen(3100, ()=>{
    console.log('Server is listning on port 3100 .');
});

