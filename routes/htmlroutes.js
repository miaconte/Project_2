var path = require("path");

module.exports = function(app) {

    app.get("/activities", function(req, res){
        res.sendFile(path.join(__dirname, "../activities.html"));
    })

    // will display survey page when /survey is visited.
    app.get("/activities/:city", function(req, res){
        var city = req.params.city;
        const hbsObject  = {city};
        res.render("activities", hbsObject);
    });

    // default catches undefined routes and send user to home page. 
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, '../landing.html'));
    });
};