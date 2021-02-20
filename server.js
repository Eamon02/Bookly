const express = require("express");
require("dotenv").config();

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
const db = require("./models");

// Static directory
app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRouter = require("./routes/html-routes.js");
const apiRouter = require("./routes/api-routes.js");

// Invoke routes
htmlRouter(app);
// authorRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
