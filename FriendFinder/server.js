//=========================================
//Dependencies
//=========================================

var express = require("express");
var bodyParser = require("body-parser");

//=========================================
// EXPRESS CONFIGURATION
//=========================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =======================================
// ROUTES
// =======================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =======================================
// LISTENER
// =======================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
