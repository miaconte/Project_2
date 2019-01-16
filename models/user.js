var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("users", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        interests: DataTypes.STRING,
        city: DataTypes.STRING
    });
}