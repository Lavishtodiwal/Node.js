const http = require("http");
const fs = require("fs");
const { parse } = require("path");
const server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.url === "/contact_us") {
    fs.writeFileSync("lavish.txt", "hello");

    res.statusCode = 302;
    res.setHeader("Location", "/");
    const body = [];
    // return res.end(); // important: return
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      fs.writeFileSync("house.txt", parsedBody);
    });
  }

  //default form
  res.write("<h1>form handling</h1>");
  res.write(`
      <form action="/contact_us" method="POST">
    <label for="houseName">Enter your House name: </label>
    <input type="text" name="houseName" id="houseName" placeholder="Enter your house Name">
    <br><br><br>
    <button type="submit">Submit</button>
    `);
  res.end();
});

server.listen(3000, () => {
  console.log(`server is running on the port 3000`);
});
