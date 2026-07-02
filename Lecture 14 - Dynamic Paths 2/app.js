// core modules
const path = require("path");
//global modules
const express = require("express");
const app = express();

//local modules
const storeRouter = require("./routes/storeRouter");
const { hostRouter, registeredHomes } = require("./routes/hostRouter");
const { pageNotFound } = require("./controllers/errors/error");
const rootDir = require("./utils/pathUtils");
const Port = 3000;

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter); //this will auto add /host in all the request inside it

//for set the ejs

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public"))); //iske thorough files publicaly accesible hai or  niche wala jo hai wo sirf request pr hi pages ko serve krega

//and ye to jayegi in case of the any bad request
app.use(pageNotFound);

app.listen(Port, () => {
  console.log(`server is running on the ${Port}`);
});

//cmnds

// npx @tailwindcss/cli -i ./public/css/input.css -o ./public/css/output.css --watch
