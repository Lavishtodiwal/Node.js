const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});

server.listen(port, () => {
  console.log(`Server is running on the url localhost:${port}`);
});
