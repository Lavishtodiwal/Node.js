// core modules
const path = require("path");

// external modules
const express = require("express");
const userRouter = express.Router();
//local modules
const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir, "views", "home.html")); //for html serving pages
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb Home",
  }); //for ejs
});

module.exports = userRouter;
