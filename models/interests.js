var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("interest", {
        user_id: DataTypes.INTEGER,
        user_interest: DataTypes.INTEGER
    });
}