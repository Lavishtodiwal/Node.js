// core modules
const path = require("path");

// external modules
const express = require("express");
const authRouter = express.Router();
//local modules
const rootDir = require("../utils/pathUtils");
const authController = require("../controllers/authController");

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);

module.exports = authRouter;
