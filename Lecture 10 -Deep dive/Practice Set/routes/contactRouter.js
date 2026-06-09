//global modules
const express = require("express");

//core modules
const path = require("path");
//local modules
const contactRouter = express.Router();
const rootDir = require("../utils/contactUtils");

contactRouter.get("/contact_us", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "Contact.html"));
});

contactRouter.post("/contact_us", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "Submit.html"));
});

module.exports = contactRouter;
