// core modules
const path = require("path");

const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");

const registeredHomes = [];

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration sucessfully.", req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootDir, "views", "homeAdd.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
