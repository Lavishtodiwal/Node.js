const http = require("http");

const server = http.createServer((req, res)=> {
  console.log(req);
})

const port = 2000
server.listen(port,()=>{
  console.log("listening on the port 2000")
});