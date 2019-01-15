var path = require('path');
var socialController = require('../controllers/socialController.js');

module.exports = function(app){

  // API GET Requests
  app.get('/api/social', function(req, res){
    res.json(socialController);
  });


//   // user submits a form and it submits data to the server.
//   app.post('/api/friends', function(req, res){

//     var bestMatch = {
//       name: "",
//       photo: "",
//       friendDifference: 1000
//     };

//     var userData = req.body;
//     var userScores = userData.scores;
//     var totalDifference = 0;

//     // loops the friend database
//     for (var i = 0; i < friends.length; i++) {

      
//       totalDifference = 0;

//       // loops through the friend possibilities 
//       for (var x = 0; x < friends[i].scores[x]; x++) {

//     // calculates the sum using totalDifference
//     totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));

//     // If the sum of differences is less then the differences of the current "best match"
//     if (totalDifference <= bestMatch.friendDifference) {

//           // Reset the bestMatch to be the new friend.
//           bestMatch.name = friends[i].name;
//           bestMatch.photo = friends[i].photo;
//           bestMatch.friendDifference = totalDifference;
//         }
//       }
//     }

//     // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
//     // the database will always return that the user is the user's best friend).
//     friends.push(userData);

//     // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
//     res.json(bestMatch);

//     console.log(friends[i].name + "   " + totalDifference);
//   });

};