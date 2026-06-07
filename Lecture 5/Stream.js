// =============================================
// IMPORT REQUIRED MODULES
// =============================================

const http = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");

const PORT = 3001;

// =============================================
// CREATE HTTP SERVER
// =============================================

const server = http.createServer((req, res) => {
  // Log the incoming request URL and method
  console.log(req.url, req.method);

  // =============================================
  // HOME PAGE ROUTE
  // =============================================

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Learning Node.js</title></head>");
    res.write("<body>");

    res.write("<h1>Welcome to the Code World</h1>");

    // Form sends data to /submit_payload using POST method
    res.write("<form action='/submit_payload' method='POST'>");

    // Username input
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'>",
    );

    // Gender radio buttons
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' id='male' name='gender' value='male'>");

    res.write("<label for='female'>Female</label>");
    res.write("<input type='radio' id='female' name='gender' value='female'>");

    // Submit button
    res.write("<button type='submit'>Submit</button>");

    res.write("</form>");

    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  // =============================================
  // FORM SUBMISSION ROUTE
  // =============================================

  if (req.url === "/submit_payload" && req.method === "POST") {
    // Array to store incoming chunks
    const body = [];

    // ---------------------------------------------
    // DATA EVENT
    // ---------------------------------------------
    // Fires whenever a chunk of data arrives
    // ---------------------------------------------

    req.on("data", (chunk) => {
      console.log("Chunk Received:");
      console.log(chunk);

      body.push(chunk);
    });

    // ---------------------------------------------
    // END EVENT
    // ---------------------------------------------
    // Fires when all chunks are received
    // ---------------------------------------------

    //******************************** */
    req.on("end", () => {
      // Combine all chunks into one buffer
      const parsedBody = Buffer.concat(body).toString();

      //parsing the request in the formatted way.
      const params = new URLSearchParams(parsedBody);
      //method 1

      // const jsonObjects = {};
      // for (const [key, val] of params.entries()) {
      //   jsonObjects[key] = val;
      // }

      //method 2 ******
      const jsonObjects = Object.fromEntries(params);
      fs.writeFileSync("user1.txt", JSON.stringify(jsonObjects));

      console.log(jsonObjects);
      console.log("Complete Form Data:");
      console.log(parsedBody);

      // Example Output:
      // username=Lavish&gender=male

      // Save form data into a file
      fs.writeFileSync("user.txt", parsedBody);

      // Redirect user back to home page
      res.statusCode = 302;
      res.setHeader("Location", "/");

      return res.end();
    });

    // Important:
    // We return here because response will be sent
    // inside the 'end' event callback.
    return;
  }

  // =============================================
  // FALLBACK ROUTE (404)
  // =============================================

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");

  res.write(`
    <html>
      <head>
        <title>404</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
      </body>
    </html>
  `);

  res.end();
});

// =============================================
// START SERVER
// =============================================

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
