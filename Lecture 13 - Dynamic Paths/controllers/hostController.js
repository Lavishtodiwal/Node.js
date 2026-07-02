const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  // console.log(req.body);33
  res.render("host/addHome", {
    pageTitle: "Register your houses at airbnb",
    currentPage: "Add Home",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-home-list",
    });
  });
};


exports.postAddHome = (req, res, next) => {
  console.log("Home Registration sucessfully.");
  const { houseName, priceNight, rating, location, photo } = req.body;
  const home = new Home(houseName, priceNight, rating, location, photo);
  home.save();
  res.render("host/homeAdd", {
    pageTitle: "Your home is added Successfully",
    currentPage: "HomeAdd",
  });
};
