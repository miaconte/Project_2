var path = require('path');

module.exports = function(app){

  // API GET Requests
  app.get('/api/social', function(req, res){
    res.json(socialController);
  }); 
}


