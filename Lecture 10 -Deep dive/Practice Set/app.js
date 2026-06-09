const express = require("express");
const path = require("path");
const contactRouter = require("./routes/contactRouter");
const app = express();
const Port = 3000;

const rootDir = require("./utils/contactUtils");

// app.use((req, res, next) => {
//   console.log("Logger");
//   next();
// });

app.use(express.urlencoded());

app.use(contactRouter);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(`  <h1 style="color: red; text-align: center;">Homepage</h1>
  <a href="/contact_us">Go to contact page.</a>`);
});
app.use("/", (req, res, next) => {
  console.log("404 not found!!");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(Port, () => {
  console.log(`server is running on the ${Port}`);
});
