// const express = require("express");
// const PORT = process.env.PORT || 8080;
// const app = express();

// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// const apirouter = require("./routes/api-routes.js");
// const htmlrouter = require("./routes/html-routes.js");

// app.use(apirouter)
// app.use(htmlrouter)

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, () =>
//   console.log(`Server listening on: http://localhost:${PORT}`)
// );

const express = require("express");

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
