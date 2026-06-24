// core modules
const path = require("path");

const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const homesController = require("../controllers/homes");


hostRouter.get("/add-home", homesController.getAddHome); ///controlled by the controller
hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;
