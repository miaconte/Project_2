var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        interests: DataTypes.STRING,
        city: DataTypes.STRING,
        password: DataTypes.STRING
    });
}