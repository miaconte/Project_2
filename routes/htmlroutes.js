var path = require("path");

module.exports = function (app) {

    app.get("/activities", function (req, res) {
        res.sendFile(path.join(__dirname, "../activities.html"));
    })

    // Captures city name via handlebars
    app.get("/activities/:city", function (req, res) {
        var city = req.params.city;
        const hbsObject = {city};
        res.render("activities", hbsObject);
    });

    // Creating a Handlebars object 
    app.get("/activities/:city", function (req, res) {
        var activity = req.body.event_name;
        const hbsObject = {activity};
        res.render("activities", hbsObject);
    });

    // City has a value via params and activity has no value 
    

    // GET route for getting all of the activities/:city
    app.get("/api/activities/:city", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.activities.findAll({
            where: {
                event_city: req.params.city,
                post_id: req.body.post_id
            }
        }).then(function (dbActCities) {
            console.log(dbActCities);
            // We have access to the activities as an argument inside of the callback function
            res.json(dbActCities);
        });
    });

    // default catches undefined routes and send user to home page. 
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, '../landing.html'));
    });
};