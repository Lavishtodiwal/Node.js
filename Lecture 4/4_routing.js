//routing request example

const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Homepage</title></head>");
    res.write("<body><h1>This is Homepage using the node.js </h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Product Section</title></head>");
    res.write("<body><h1>This is Product Section page.. </h1></body>");
    res.write("</html>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Error Routing</title></head>");
    res.write(
      "<body><h1>This is Error Routing page You hit the wrong url. </h1></body>",
    );
    res.write("</html>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running on the url localhost:${port}`);
});
