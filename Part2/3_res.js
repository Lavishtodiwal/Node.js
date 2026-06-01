//sending responses 

const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>This is my first page using the </h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running on the url localhost:${port}`);
});
