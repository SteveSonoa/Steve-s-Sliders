// Require the necessary packages
var express = require('express');
var bodyParser = require('body-parser');

// Sync to the DB before starting the server
var db = require("./models");
db.sequelize.sync();

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
