var express = require("express");
var app = express();
var router = express.Router();

// Import the model (social.js) to use its database functions.
var social = require("../models");

router.get("/", function(res){
    res.sendFile(path.join(__dirname, "../landing.html"));
});


router.get("/activities", function (req, res) {
    social.all(function (data) {
        var actObj = {
            activities: data
        };
        console.log(actObj);
        res.render("activities", actObj);
    });
});

router.put("/api/activities/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
});

module.exports = router;