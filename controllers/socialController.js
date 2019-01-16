var express = require("express");
var app = express();
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var social = require("../models/social.js");


function index(req, res) {
    app.get("/", function (res, req){
        res.sendfile(path.join(__dirname, ("./main.html"))
        )}
    )};
   

module.exports = index;