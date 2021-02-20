var db = require("../models");

module.exports = function (app) {
  app.get("/api/books", (req, res) => {

    db.booktable.findAll({}).then((dbbooktable) => res.json(dbbooktable));
  });

  app.get("/api/books/:title", (req, res) => {
    db.booktable.findOne({
      where: {
        title: req.params.title,
      },
    }).then((dbbooktable) => res.json(dbbooktable));
  });
};

// app.post('/api/books', (req, res) => {
//   db.booktable.create({
//     title: req.body.title,
//     author: req.body.author,
//     user_rating: req.body.user_rating,
//     reading_status: req.body.reading_status,
//     category: req.body.category,
//   }).then((dbbooktable) => res.json(dbbooktable));
// });

// app.delete('/api/books/:title', (req, res) => {
  
//   db.booktable.destroy({
//     where: {
//       title: req.params.title,
//     },
//   }).then((dbbooktable) => res.json(dbbooktable));
// });


// module.exports = function (app) {};

///
