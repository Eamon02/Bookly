var db = require("../models");

module.exports = function (app) {
  app.get("/api/books", (req, res) => {
    db.booktable.findAll({}).then((bookall) => res.json(bookall));
  });

  app.get("/api/books/:title", (req, res) => {
    db.booktable
      .findOne({
        where: {
          title: req.params.title,
        },
      })
      .then((booktitle) => res.json(booktitle));
  });
<<<<<<< HEAD
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
=======
>>>>>>> bb7e69f8e5c6e1c5dd6b131ad21d31bb6546afe8

  app.get("/api/read/:reading_status", (req, res) => {
    db.booktable
      .findOne({
        where: {
          reading_status: req.params.reading_status,
        },
      })
      .then((bookread) => res.json(bookread));
  });

<<<<<<< HEAD
// module.exports = function (app) {};
=======
  app.post("/api/books", (req, res) => {
    db.booktable
      .create({
        title: req.body.title,
        author: req.body.author,
        user_rating: req.body.user_rating,
        reading_status: req.body.reading_status,
        category: req.body.category,
      })
      .then((bookadd) => res.json(bookadd));
  });
>>>>>>> bb7e69f8e5c6e1c5dd6b131ad21d31bb6546afe8

  app.delete("/api/books/: title", (req, res) => {
    db.booktable
      .destroy({
        where: {
          title: req.params.title,
        },
      })
      .then((bookdelete) => res.json(bookdelete));
  });
};
