const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Port = 3000;

app.use((req, res, next) => {
  console.log("Logger");
  next();
});

app.get("/", (req, res) => {
  res.send(`  <h1 style="color: red; text-align: center;">Homepage</h1>
  <a href="/contact_us">go to contact page</a>`);
});

app.get("/contact_us", (req, res) => {
  res.send(`  <h1 style="color: red; text-align: center;">Contact form</h1>
  <form action="/contact_us" method="POST">
    <label for="username">USer name: </label>
    <input type="text" name="username" id="username">
    <label for="email">USer name: </label>
    <input type="email" name="email" id="email">
    <br><br><br>
    <button type="submit">Submit</button>
  </form>`);
});
app.post("/contact_us", (req, res,next) => {
  console.log("first handling /contact_us", req.url, req.method, req.body);
  res.send("Form Submitted");
  next();
});


app.use(bodyParser.urlencoded()); // parse the body

app.post("/contact_us", (req, res,next) => {
  console.log("handling /contact_us for post", req.url, req.method, req.body);
  // res.send("Form Submitted");
});

app.listen(Port, () => {
  console.log(`server is running on the ${Port}`);
});
