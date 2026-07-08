// core modules
const path = require("path");
//global modules
const express = require("express");
const app = express();

//local modules
const storeRouter = require("./routes/storeRouter");
const { hostRouter, registeredHomes } = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const { pageNotFound } = require("./controllers/errors/error");
const rootDir = require("./utils/pathUtils");
const session = require("express-session");
const dbPath =
  "mongodb://osamakhan75557_db_user:cO05GEsV865OarEi@ac-bywyjep-shard-00-00.xt7ydij.mongodb.net:27017,ac-bywyjep-shard-00-01.xt7ydij.mongodb.net:27017,ac-bywyjep-shard-00-02.xt7ydij.mongodb.net:27017/airbnb?ssl=true&replicaSet=atlas-ylg41q-shard-0&authSource=admin&appName=Cluster0";
const { default: mongoose } = require("mongoose");
const { MongoStore } = require("connect-mongo");

const PORT = 3000;

app.use(express.urlencoded());

app.use(
  session({
    secret: "this is the airbnb clone project",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbPath,
      collectionName: "sessions",
    }),
  }),
);
//for cheking the cookies
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn;
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});
app.use(storeRouter);
app.use(authRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter); //this will auto add /host in all the request inside it

//for set the ejs

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public"))); //iske thorough files publicaly accesible hai or  niche wala jo hai wo sirf request pr hi pages ko serve krega

//and ye to jayegi in case of the any bad request
app.use(pageNotFound);

mongoose
  .connect(dbPath)
  .then(() => {
    console.log("Connected to mongoDb via mongoose");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error while connect to db", error);
  });

//cmnds

// npx @tailwindcss/cli -i ./public/css/input.css -o ./public/css/output.css --watch
