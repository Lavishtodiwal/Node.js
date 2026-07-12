const Home = require("../models/homes");
const fs = require("fs");
exports.getAddHome = (req, res, next) => {
  // console.log(req.body);
  res.render("host/addHome", {
    pageTitle: "Register your houses at airbnb",
    currentPage: "Add Home",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found for editing!");
      return res.redirect("/host/host-home-list");
    }
    // console.log(homeId, " & ", editing, "& ", home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "host-home-list",
      editing: editing,
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.getHostHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.postAddHome = async (req, res) => {
  try {
    const { houseName, priceNight, rating, location, description } = req.body;

    const photo = req.files?.photo?.[0]?.filename || "";
    const rulesPdf = req.files?.rulesPdf?.[0]?.filename || "";

    const home = new Home({
      houseName,
      priceNight,
      rating,
      location,
      description,
      photo,
      rulesPdf,
    });

    await home.save();

    res.redirect("/host/host-home-list");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
exports.postEditHome = async (req, res) => {
  try {
    const { id, houseName, priceNight, rating, location, description } =
      req.body;

    const home = await Home.findById(id);

    if (!home) {
      return res.redirect("/host/host-home-list");
    }

    home.houseName = houseName;
    home.priceNight = priceNight;
    home.rating = rating;
    home.location = location;
    home.description = description;

    if (req.files?.photo?.length) {
      if (home.photo && fs.existsSync(home.photo)) {
        fs.unlinkSync(home.photo);
      }

      home.photo = req.files.photo[0].filename;
    }

    if (req.files?.rulesPdf?.length) {
      if (home.rulesPdf && fs.existsSync(home.rulesPdf)) {
        fs.unlinkSync(home.rulesPdf);
      }

      home.rulesPdf = req.files.rulesPdf[0].filename;
    }

    await home.save();

    res.redirect("/host/host-home-list");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came for delete the home ");
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("error while deleting the home", err);
    });
};
