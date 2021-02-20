// Requiring our models and passport as we've configured it
var db = require("../models");


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

