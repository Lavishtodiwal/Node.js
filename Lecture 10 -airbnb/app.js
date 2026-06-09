// core modules
const path = require("path");
//global modules
const express = require("express");
const app = express();

//local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils"); 
const Port = 3000;

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter); //this will auto add /host in all the request inside it


app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
  res.status(404).sendFile(path.join(rootDir,'views','404.html')); //after the util file add 
});

app.listen(Port, () => {
  console.log(`server is running on the ${Port}`);
});
