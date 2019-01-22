var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        user_id: { type: Sequelize.INTEGER, primaryKey: true},
       
    });
};