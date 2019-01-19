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

    // will display new post page when / is visited.
    app.get("/newpost", function(req, res){
        var newPost = req.params.event_name;
        const hbsObject  = {newPost};
        res.render("posts", hbsObject);
    });

    // default catches undefined routes and send user to home page. 
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, '../landing.html'));
    });
};