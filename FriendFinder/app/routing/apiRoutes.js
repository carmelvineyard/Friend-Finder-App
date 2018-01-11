// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var responseData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Request
  app.get("/api/friends", function(req, res) {
    res.json(responseData);
  });

  // API POST Request
  
  app.post("/api/friends", function(req, res) {
    responseData.push(req.body);    
  });

  