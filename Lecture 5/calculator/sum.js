const sumRequestHandler = (req, res) => {
  console.log("url is runnung the sum", req.url);

  const body = [];
  req.on("data", (chunk) => {
    console.log("chunk is recieved");
    // console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <h1 style="color:red;">Your sum is :${result}</h1>
      <a href="/">back to HomePage.</a>
    </body>
    </html>
  `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
