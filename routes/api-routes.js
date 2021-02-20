// Requiring our models and passport as we've configured it
var db = require("../models");

<<<<<<< HEAD

module.exports = function(app) {

    app.get('/api/book', (req, res) => {
        
        db.booktable.findAll({
          include: [db.Post],
        }).then((dbAuthor) => res.json(dbAuthor));
      });

      app.get('/api/book/:title', (req, res) => {
        
        db.booktable.findOne({
          where: {
            title: req.params.title,
          },
          include: [db.Post],
        }).then((dbAuthor) => res.json(dbAuthor));
      });






}

=======
module.exports = function (app) {
  app.get("/api/authors", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findAll({
      include: [db.Post],
    }).then((dbAuthor) => res.json(dbAuthor));
  });

  app.get("/api/book/:title", (req, res) => {
    db.Author.findOne({
      where: {
        title: req.params.title,
      },
      include: [db.Post],
    }).then((dbAuthor) => res.json(dbAuthor));
  });
};
module.exports = function (app) {};

///
>>>>>>> 97069b78a4585c2d373f1da62e8c2f62cd3aa198
