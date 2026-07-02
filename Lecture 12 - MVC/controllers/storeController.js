const Home = require("../models/homes");

// exports.registeredHomes = registeredHomes;

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "My bookings",
      currentPage: "bookings",
    });
  });
};

exports.getFavorite = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favorite-list", {
      registeredHomes,
      pageTitle: "My Favorite List",
      currentPage: "favorite-list",
    });
  });
};
exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "My Home List",
      currentPage: "home-list",
    });
  });
};
