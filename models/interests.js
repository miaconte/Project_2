const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("interests", {
        user_id: DataTypes.INTEGER,
        user_interest: DataTypes.INTEGER,
        event_city: DataTypes.STRING,
        event_name: DataTypes.STRING,
        interest_id: {type: Sequelize.INTEGER, primaryKey: true}
    });
}