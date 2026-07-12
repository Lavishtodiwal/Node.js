const Home = require("../models/homes");
const User = require("../models/user");

// exports.registeredHomes = registeredHomes;

exports.getIndex = (req, res, next) => {
  console.log("Session value", req.session);
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "Airbnb | Home",
      currentPage: "index",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
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
      user: req.session.user,
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
      user: req.session.user,
    });
  });
};

exports.getFavorite = async (req, res) => {
  try {
    const userId = req.session.user._id;

    const user = await User.findById(userId).populate("favorites");

    console.log(user);

    res.render("store/favorite", {
      favoritesHomes: user.favorites,
      pageTitle: "My Favorite List",
      currentPage: "favorite",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getHomeList = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "My Home List",
      currentPage: "home-list",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
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
      user: req.session.user,
    });
  });
};
exports.postAddToFavorite = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user.favorites.includes(homeId)) {
    user.favorites.push(homeId);
    await user.save();
  }
  res.redirect("/favorite");
};
exports.postDeleteFavorite = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (user.favorites.includes(homeId)) {
    user.favorites = user.favorites.filter((fav) => fav != homeId);
    await user.save();
  }
  res.redirect("/favorite");
};

exports.downloadRules = async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }

  const home = await Home.findById(req.params.homeId);

  if (!home || !home.rulesPdf) {
    return res.redirect("/homes");
  }

  res.download(home.rulesPdf);
};
