var path = require('path');
var socialController = require('../controllers/socialController.js');

module.exports = function(app){

  // API GET Requests
  app.get('/api/social', function(req, res){
    res.json(socialController);
  });
