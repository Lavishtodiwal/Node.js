const Favorite = require("../models/favorite");
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
  Favorite.getFavorite((favorites) => {
    Home.fetchAll((registeredHomes) => {
      const favoritesHomes = favorites.map((homeId) =>
        registeredHomes.find((home) => home.id === homeId),
      );
      res.render("store/favorite", {
        favoritesHomes: favoritesHomes,
        pageTitle: "My Favorite List",
        currentPage: "favorite",
      });
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
exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("Home ID:", homeId);

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }

    console.log("Home found:", home);

    res.render("store/home-details", {
      pageTitle: "Home Detail",
      currentPage: "Home",
      home: home, // ✅ Pass the home object
    });
  });
};
exports.postAddToFavorite = (req, res, next) => {
  console.log("came to add to favourite", req.body);

  Favorite.addToFavorite(req.body.id, (error) => {
    if (error) {
      console.log(error);
      return res.redirect("/favorite");
    }

    res.redirect("/favorite");
  });
};
exports.postDeleteFavorite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favorite.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while removing from Favourite", error);
    }
    res.redirect("/favorite");
  });
};
