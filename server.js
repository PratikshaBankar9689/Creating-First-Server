const http = require("http");
const port = 8083 ;
http.createServer((request,response) =>{
  response.writeHead(200,{
    "Content-Type":"text/html"
  });
  response.write("<h1>Hello,This is my First Server</h1>");
  response.end();
})
.listen(port, () =>{
    console.log('Node.js server is Started at port  ${port}');
});

// http://localhost:8083