var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var social = require("../models/social.js");