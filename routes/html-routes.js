// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/books", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/cms.html"))
  );

  app.get("/authors", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/author-manager.html"))
  );
};

