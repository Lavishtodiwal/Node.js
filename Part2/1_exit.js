import { createServer } from "http";
const port = 3001;
const server = createServer((req, res) => {
  console.log(req);
  // console.log(res);
  process.exit();
});

server.listen(port, () => {
  console.log(`Server is respoding on the port ${port}`);
});
