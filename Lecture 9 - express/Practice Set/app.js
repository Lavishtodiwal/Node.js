const express = require("express");
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

app.post("/contact_us", (req, res) => {
  res.send("Form Submitted");
});

app.listen(Port, () => {
  console.log(`server is running on the ${Port}`);
});

// use -> har HTTP method ke liye chalega:

// GET /
// POST /
// PUT /
// DELETE /
// PATCH /

// const express = require("express");
// const app = express();
// const Port = 3000;

// app.use((req, res, next) => {
//   console.log("1",req.url, req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("2",req.url, req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("3",req.url, req.method);
//   res.send("<p>Welcome to express..</p>")
// });

// app.listen(Port, () => {
//   console.log(`server is running on the ${Port}`);
// });

// Request
//   │
//   ▼
// Middleware 1
//   │
//   ├── console.log("1")
//   └── next()
//   │
//   ▼
// Middleware 2
//   │
//   ├── console.log("2")
//   └── next()
//   │
//   ▼
// Middleware 3
//   │
//   ├── console.log("3")
//   └── res.send()
//   │
//   ▼
// Response sent

//************************************* */

// 1. next()  → agle middleware ko control do
// OR
// 2. res.send()/res.end() → response bhej do
