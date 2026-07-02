const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  // console.log(req.body);33
  res.render("host/addHome", {
    pageTitle: "Register your houses at airbnb",
    currentPage: "Add Home",
  });
};
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found for editing!");
      return res.redirect("/host/host-home-list");
    }
    console.log(homeId, " & ", editing, "& ", home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "host-home-list",
      editing: editing,
    });
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
  res.redirect("/host/host-home-list");
};
exports.postEditHome = (req, res, next) => {
  const { id, houseName, priceNight, rating, location, photo } = req.body;
  const home = new Home(houseName, priceNight, rating, location, photo);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came for delete the home ");
  Home.deleteById(homeId, (err) => {
    if (err) console.log("error while deleting the home", err);
    res.redirect("/host/host-home-list");
  });
};
