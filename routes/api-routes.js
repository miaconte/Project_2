// Dependencies
// =============================================================
var path = require('path');
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the activities
  app.get("/api/activities", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activities.findAll({}).then(function(dbActivities) {
      // We have access to the activities as an argument inside of the callback function
      res.json(dbActivities);
    });
  });

  // GET route for getting all of the activities/:city
  app.get("/api/activities/:city", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activities.findAll({}).then(function(dbActCities) {
      // We have access to the activities as an argument inside of the callback function
      res.json(dbActCities);
    });
  });


  app.get("/api/activities/:user", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activities.findAll({}).then(function(dbActUsers) {
      // We have access to the activities as an argument inside of the callback function
      res.json(dbActUsers);
    });
  });

  // POST route for saving a new activities
  app.post("/api/activities", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.activities.create({
      event_name: req.body.name,
      event_city: req.body.city,
      event_link: req.body.link,
      event_category: req.body.category
    }).then(function(dbactivities) {
      // We have access to the new activities as an argument inside of the callback function
      res.json(dbactivities);
    });
  });

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.users.findAll({}).then(function(dbUsers) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbUsers);
    });
  });

  // GET route for getting all of the users
  app.get("/api/users/:user_id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.users.findAll({}).then(function(dbUsers) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbUsers);
    });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.users.create({
      name: req.body.name,
      email: req.body.email,
      interests: req.body.interests,
      event_city: req.body.city
    }).then(function(dbusers) {
      // We have access to the new users as an argument inside of the callback function
      res.json(dbusers);
    });
  });

  // GET route for getting all of the posts
  app.get("/api/posts/:post_id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activites.findAll({

    }).then(function(dbPosts) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbPosts);
    });
  });

  // PUT route for updating todos. We can get the updated post data from req.body
  app.put("/api/posts/:post_id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.activities.update({
      event_name: req.body.name,
      event_city: req.body.city,
      event_link: req.body.link,
      event_category: req.body.category
    }, {
      where: {
        post_id: req.body.post_id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting users. We can get the id of the post to be deleted from
  // req.params.id
  app.delete("/api/posts/:post_id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.activities.destroy({
      where: {
        post_id: req.params.post_id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });

};

