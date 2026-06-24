exports.getAddHome = (req, res, next) => {
  console.log(req.body);
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));

  res.render("addHome", {
    pageTitle: "Register your houses at airbnb",
    currentPage: "Add Home",
  });
};

const registeredHomes = [];

exports.postAddHome = (req, res, next) => {
  console.log("Home Registration sucessfully.", req.body);
  registeredHomes.push({
    houseName: req.body.houseName,
    priceNight: req.body.priceNight,
    rating: req.body.rating,
    location: req.body.location,
    photo: req.body.photo,
  });
  // res.sendFile(path.join(rootDir, "views", "homeAdd.html"));
  res.render("homeAdd", {
    pageTitle: "Your home is added Successfully",
    currentPage: "HomeAdd",
  });
};

exports.registeredHomes = registeredHomes;

exports.getHomes = (req, res, next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir, "views", "home.html")); //for html serving pages
  res.render("home", {
    registeredHomes,
    pageTitle: "airbnb Home",
    currentPage: "Home",
  }); //for ejs
};
