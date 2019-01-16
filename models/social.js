var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("activities", {
        event_name: DataTypes.STRING,
        event_city: DataTypes.STRING,
        event_link: DataTypes.STRING,
        event_category: DataTypes.STRING,
        post_id: DataTypes.INTEGER
    });
};
