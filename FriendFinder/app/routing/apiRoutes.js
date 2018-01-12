// ===============================================================================
// LOAD DATA
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

	//Logic to find the bestMatch:

	//object to hold the bestMatch
	var bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	};

	//Parse the results of the user's survey POST
	var userData = req.body;
	var userName = userData.name;
	var userPhoto = userData.photo;
	var userScores = userData.scores;

	var totalDifference = 0;

	//First Loop through the possibilities in the database
	for (var i = 0; i < friends.length; i++) {
		console.log(friends[i].name);
		totalDifference = 0;

		//Second Loop through the scores of each possibility
		for (var i = 0; i < friends[i].scores[j]; j++) {
		
			//Calculate the difference between the scores (using absolute values) and sum them into the totalDifference
			totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

			//If the sum of differences is less than the differences of the current bestMatch
			if (totalDifference <= bestMatch.friendDifference){

				//Reset the bestMatch to be the new friend.
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = totalDifference;
			}


		}// end second for loop
	} // end first for loop



   //Finally, save the most recent responses to the array.
   //If this happens earlier, the user would always be the bestMatch. 
    responseData.push(userData); 

   //Return a JSON with the bestMatch. This will be used by survey.html for the modal.
   	res.json(bestMatch); 

  }); //end app.post

  