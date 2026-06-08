const express = require("express");
const userRequest = require("./module");
const PORT = 3001;

const app = express();

//adding middleware
app.get("/", (req, res, next) => {
  console.log("Came in first Middleware", req.url, req.method);
  next();
});
app.post("/submit_payload", (req, res, next) => {
  console.log("Came in second Middleware", req.url, req.method);
  res.send("<h1>This is using the express 2</h1>");
});

//use me / means everything that have / will run
app.use("/", (req, res, next) => {
  console.log("Came in another Middleware", req.url, req.method);
  res.send("<h1>Came in another Middleware");
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
