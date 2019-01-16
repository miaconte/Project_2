var path = require("path");

module.exports = function(app) {
    // will display survey page when /survey is visited.
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../landing.html"));
    });

    app.get("/activities/:city", function(req, res){
        var city = req.params.city 
        console.log(city);
    } )

    // default catches undefined routes and send user to home page. 
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, '../landing.html'));
    });
};