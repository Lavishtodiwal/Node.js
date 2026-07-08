const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  // console.log(req.body);
  res.render("host/addHome", {
    pageTitle: "Register your houses at airbnb",
    currentPage: "Add Home",
    isLoggedIn: req.isLoggedIn,
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
    });
  });
};

exports.postAddHome = (req, res, next) => {
  console.log("POST /host/add-home hit");
  console.log("REQ BODY:", req.body);

  const { houseName, priceNight, rating, location, photo, description } =
    req.body;

  const home = new Home({
    houseName,
    priceNight,
    rating,
    location,
    photo,
    description,
  });

  home
    .save()
    .then((result) => {
      console.log("INSERT RESULT:", result);
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("INSERT ERROR:", err);
      res.status(500).send("Insert failed");
    });
};
exports.postEditHome = (req, res, next) => {
  // console.log(req.body);
  const { id, houseName, priceNight, rating, location, photo, description } =
    req.body;

  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.priceNight = priceNight;
      home.rating = rating;
      home.location = location;
      home.photo = photo;
      home.description = description;
      home
        .save()
        .then((result) => {
          console.log("home edited", result);
          res.redirect("/host/host-home-list");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log("error while finding home", error);
    });
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
