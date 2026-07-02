// core modules
const path = require("path");

const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const hostController = require("../controllers/hostController");


hostRouter.get("/add-home", hostController.getAddHome); ///controlled by the controller

hostRouter.get("/host-home-list", hostController.getHostHomes); ///controlled by the controller
hostRouter.post("/add-home", hostController.postAddHome);
exports.hostRouter = hostRouter;
