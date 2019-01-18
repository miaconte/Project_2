// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs  = require('express-handlebars');

var app = express();
var db = require("./models");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3007;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 


// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, './public')))

require("./routes/api-routes")(app);
require("./routes/htmlroutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./main.html"));
});

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/survey.html"));
// });

db.sequelize.sync().then(function() {
  console.log("db synced...");
});

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});