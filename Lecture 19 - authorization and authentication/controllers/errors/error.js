exports.pageNotFound = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
  res.status(404).render("404", {
    pageTitle: "Page not Found",
    currentPage: "404",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  }); //after the util file add
};
