var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("activities", {
        event_name: DataTypes.STRING,
        event_city: DataTypes.STRING,
        event_link: {type: Sequelize.STRING},
        event_category: DataTypes.STRING,
        post_id: {type: Sequelize.INTEGER, primaryKey: true }
    });
};


