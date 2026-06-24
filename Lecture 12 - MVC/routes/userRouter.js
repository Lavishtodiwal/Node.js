// core modules
const path = require("path");

// external modules
const express = require("express");
const userRouter = express.Router();
//local modules
const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");
const { getHomes } = require("../controllers/homes");

userRouter.get("/", getHomes);

module.exports = userRouter;
