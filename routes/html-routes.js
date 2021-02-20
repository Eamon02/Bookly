// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

module.exports = function (app) {
  app.get("/", async (req, res) => {
    // console.log("stuff");
    let books = await db.booktable.findAll({});
    let readBooks = books.filter( book => {
      return book.dataValues.reading_status === "Read";
    });
  console.log(readBooks);
    // console.log(books);
    res.render("index", {books});
  
  });

  app.get("/status/:reading_status", async (req, res) => {
    const books = await db.booktable
      .findAll({
        where: {
          reading_status: req.params.reading_status,
        },
      });
      res.render("index", {books});
  });

  app.get("/books", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/cms.html"))
  );

  app.get("/authors", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/author-manager.html"))
  );

  app.delete("/api/books/:id", async (req, res) => {
    
  });
};
