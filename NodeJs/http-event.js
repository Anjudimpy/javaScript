const http = require('http')

const server = http.createServer((req, res) => {
   if (req.method == 'POST')
  {
    //expecting data from client
   let body = ''
   req.on('data', (chunk) => {
    body += chunk.toString()
   });
   req.on("end" , () => {
    console.log(body);
    res.end('Data is received')
   })
    
  } else {
    res.end('Welcom to node js')
  }
  
})

server.listen(3100)
console.log('Server is listining on 3100')