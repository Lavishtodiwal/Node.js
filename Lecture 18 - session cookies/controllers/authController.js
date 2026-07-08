const path = require("path");
const rootDir = require("../utils/pathUtils");

exports.getLogin = (req, res, next) => {
  // console.log(req.body);
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "Login",
    isLoggedIn: false,
  });
};
exports.postLogin = (req, res, next) => {
  console.log(req.body);
  // res.cookie("isLoggedIn", true); // in case of just cookies storing
  req.session.isLoggedIn = true;
  res.redirect("/");
};
exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
