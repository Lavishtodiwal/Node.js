const http = require("http");
const testingSyntax = require("./syntax");
const RuntimeErrors = require("./Runtime");
const LogicalErrors = require("./Logical");
const server = http.createServer((req, res) => {
  console.log(req.method);
  testingSyntax();
  // RuntimeErrors();
  LogicalErrors();
});

const port = 3000;
server.listen(port, () => {
  console.log("listening on the port 3000");
});
