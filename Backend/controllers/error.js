// Handling the 404 page in case of an unknown route
exports.get404Page = (req, res, next) => {
    // url = req.url;
    // console.log("Requested url = ", req.url);
    // console.log("404 Page Not Found");
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    // res.status(404).render("404", { pageTitle: "Page Not Found" });
    // console.log("Error page is working");
    res.send("Error page is working");
  };
