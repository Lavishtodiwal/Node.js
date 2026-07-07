const Favorite = require("../models/favorite");
const Home = require("../models/homes");

// exports.registeredHomes = registeredHomes;

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "My bookings",
      currentPage: "bookings",
    });
  });
};

exports.getFavorite = (req, res, next) => {
  Favorite.getFavorite().then((favorites) => {
    favorites = favorites.map((fav) => fav.houseId);
    Home.fetchAll().then((registeredHomes) => {
      // console.log(favorites, registeredHomes);
      const favoritesHomes = registeredHomes.filter((home) =>
        favorites.includes(home._id.toString()),
      );

      res.render("store/favorite", {
        favoritesHomes,
        pageTitle: "My Favorite List",
        currentPage: "favorite",
      });
    });
  });
};
exports.getHomeList = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
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
    });
  });
};
exports.postAddToFavorite = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favorite(homeId);
  fav
    .save()
    .then((result) => {
      console.log("saved to favorites", result);
    })
    .catch((error) => {
      console.log("error to add favorite", error);
    })
    .finally(() => {
      return res.redirect("/favorite");
    });
};
exports.postDeleteFavorite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favorite.deleteById(homeId)
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
