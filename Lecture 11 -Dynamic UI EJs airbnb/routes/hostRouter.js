// core modules
const path = require("path");

const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");

const registeredHomes = [];

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.body);
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));

  res.render("addHome", {
    pageTitle: "Register your houses at airbnb",
    currentPage: "Add Home",
  });
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration sucessfully.", req.body);
  registeredHomes.push({
    houseName: req.body.houseName,
    priceNight: req.body.priceNight,
    rating: req.body.rating,
    location: req.body.location,
    photo: req.body.photo,
  });
  // res.sendFile(path.join(rootDir, "views", "homeAdd.html"));
  res.render("homeAdd", {
    pageTitle: "Your home is added Successfully",
    currentPage: "HomeAdd",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
