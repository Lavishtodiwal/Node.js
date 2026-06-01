//form  example

const http = require("http");
const fs = require("fs");
const port = 3001;

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Homepage</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the C0de world</h1>");
    res.write("<form action='/submit_payload' method='post'>");
    res.write(
      "<input type='text' name= 'username' placeholder='enter your name'>",
    );
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' id='male' name= 'gender' value='male'>");
    res.write("<label for='female'>Female</label>");
    res.write("<input type='radio' id='female' name= 'gender' value='female'>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
  //=================redirecting the request===============
  else if (
    req.url.toLowerCase() === "/submit_payload" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "Lavish Todiwal");
    res.statusCode = 302;
    res.setHeader("Location", "/");
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

/// ===================Working of this code =================

// Server Starts
//       │
//       ▼
// GET /
//       │
//       ▼
// Form Page Displayed
//       │
//       ▼
// User Clicks Submit
//       │
//       ▼
// POST /submit_payload
//       │
//       ▼
// user.txt created
// ("Lavish Todiwal")
//       │
//       ▼
// 302 Redirect
// Location: /
//       │
//       ▼
// Browser automatically requests /
//       │
//       ▼
// Homepage displayed again
