const Favorite = require("../models/favorite");
const Home = require("../models/homes");

// exports.registeredHomes = registeredHomes;

exports.getIndex = (req, res, next) => {
  console.log("Session value", req.session);
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
      isLoggedIn: req.isLoggedIn,
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
      isLoggedIn: req.isLoggedIn,
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "My bookings",
      currentPage: "bookings",
      isLoggedIn: req.isLoggedIn,
    });
  });
};

exports.getFavorite = (req, res, next) => {
  Favorite.find()
    .populate("houseId")
    .then((favorites) => {
      const favoritesHomes = favorites.map((fav) => fav.houseId);

      res.render("store/favorite", {
        favoritesHomes,
        pageTitle: "My Favorite List",
        currentPage: "favorite",
        isLoggedIn: req.isLoggedIn,
      });
    });
};
exports.getHomeList = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "My Home List",
      currentPage: "home-list",
      isLoggedIn: req.isLoggedIn,
    });
  });
};
exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("Home ID:", homeId);

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }

    console.log("Home found:", home);

    res.render("store/home-details", {
      pageTitle: "Home Detail",
      currentPage: "Home",
      home: home, // ✅ Pass the home object
      isLoggedIn: req.isLoggedIn,
    });
  });
};
exports.postAddToFavorite = (req, res, next) => {
  const homeId = req.body.id;
  // console.log(req.body);
  console.log(homeId);
  Favorite.findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        console.log("home is already in the favorite");
      } else {
        fav = new Favorite({ houseId: homeId });
        fav.save().then((result) => {
          console.log("fav added ", result);
        });
      }
      res.redirect("/favorite");
    })
    .catch((error) => {
      console.log("error while adding to favorite", error);
    });
};
exports.postDeleteFavorite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favorite.findOneAndDelete({ houseId: homeId })
    .then((result) => {
      console.log("removed from favorites", result);
    })
    .catch((error) => {
      console.log("error while removing from favorite", error);
    })
    .finally(() => {
      return res.redirect("/favorite");
    });
};
