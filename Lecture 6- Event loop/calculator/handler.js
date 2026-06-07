const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <h1 style="color:red;">Welcome to the Calculator World</h1>
      <a href="/calculator">Go to Calculator</a>
    </body>
    </html>
  `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>--------------Calculator-----------</h1>");
    res.write("<form action='/calculate-result' method='POST'>");
    res.write(
      "<input type='number' name='num1' placeholder='Enter your num1'>",
    );
    res.write(
      "<input type='number' name='num2' placeholder='Enter your num2'>",
    );
    res.write("<button type='submit'>Sum</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
    res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <h1 style="color:red;">Page not Found!!</h1>
      
    </body>
    </html>
  `);
  res.end();
};

module.exports = requestHandler;
