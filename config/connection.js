// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "wfynossiirgs4fio"
});

var Sequelize = require('sequelize');

var sequelize = new Sequelize('randomdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port : 3306,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

exports.sequelize = sequelize;
module.exports = Sequelize;
module.exports = connection;
