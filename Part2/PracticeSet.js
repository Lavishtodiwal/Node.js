const http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/home") {
    res.write("<h1>Welcome to the HomePage</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to the Men's Section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to the women's Section</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to the kids's Section</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to the cart's Section</h1>");
    return res.end();
  } 

  res.write(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>

<body>
  <nav>
    <ul>
     <li><a href="/home">Home</a></li>
      <li><a href="/men">Men</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/cart">Cart</a></li>
    </ul>
  </nav>
</body>
</html>
  `);
  res.end();
  // const response = req.url;
  // switch (response) {
  //   case "/men":
  //     res.write("<h1>This is Men's Section</h1>");
  //     break;
  //   case "/women":
  //     res.write("<h1>This is Women's Section</h1>");
  //     break;
  //   case "/kids":
  //     res.write("<h1>This is Kids's Section</h1>");
  //     break;
  //   case "/cart":
  //     res.write("<h1>This is Cart Section</h1>");
  //     break;
  //   default:
  //     res.write("<h1>Home Page</h1>");
  // }
  // res.end();
});

server.listen(PORT, () => {
  console.log(`server is listening on the port ${PORT}`);
});
