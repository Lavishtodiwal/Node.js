const http = require("http");
const requestHandler = require("./handler");
const server = http.createServer(requestHandler);

server.listen(2000, () => {
  console.log("Server is listening on port 2000");
});
