const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("interest", {
        user_id: DataTypes.INTEGER,
        user_interest: DataTypes.INTEGER,
        interest_id: {type: Sequelize.INTEGER, primaryKey: true}
    });
}