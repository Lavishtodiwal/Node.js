const sumRequestHandler = (req, res) => {
  console.log("1.url is runnung the sum", req.url);

  const body = [];
  let result;
  req.on("data", (chunk) => {
    console.log("2.chunk is recieved");
    // console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    console.log("3. End event came");
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
  });
    console.log("4. sending the response ");
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
};

exports.sumRequestHandler = sumRequestHandler;


//-------------------------------------------------------------------

//isme kuch aisa aayega 
// 1.url is runnung the sum /calculate-result
// 4. sending the response 
// 2.chunk is recieved
// 3. End event came
// num1=12&num2=11
// 23

// jab event aayega tab ye chalega 
// isliye pehle code me response ko end me likha tha 


// sumRequestHandler()

// │
// ├── req.on("data")   ← listener register
// │
// ├── req.on("end")    ← listener register
// │
// └── function khatam

// Request data arrive
// │
// ├── data callback
// │
// ├── data callback
// │
// └── end callback
//       │
//       ├── parse body
//       ├── calculate sum
//       ├── res.write()
//       └── res.end()