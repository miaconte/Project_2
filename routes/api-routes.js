var socialController = require("../controllers/socialController");

module.exports = function(app) {
    app.get("/", socialController.index);
};