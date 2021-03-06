// Dependencies
// =============================================================
var path = require('path');
var sequelize = require('sequelize');
var mysql2 = require('mysql2');
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the activities
  app.get("/api/activities", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activities.findAll({}).then(function(dbActivities) {
      console.log(dbActivities)
      // We have access to the activities as an argument inside of the callback function
      res.json(dbActivities);
    });
  });

 app.get("/activities/:city", function(req, res) {
    console.log(req.params);
    // findAll returns all entries for a table when used with no options
    db.activities.findAll({
      where: {
        event_city: req.params.city
      }
    }).then(function(activities) {
      console.log(activities);
      res.render('activities', { activities });
    });
  });

  // GET route for getting all of the activities/:user
  app.get("/api/activities/:user", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activities.findAll({
      where: {
        user_id: req.params.user
      }
    }).then(function(dbActUsers) {
      // We have access to the activities as an argument inside of the callback function
      res.json(dbActUsers);
    });
  });

  // POST route for saving a new activity
  app.post("/api/activities", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    console.log(req.body);
    db.activities.create({
      event_name: req.body.eventName,
      event_city: req.body.city,
      event_link: req.body.link,
      event_category: req.body.category
    }).then(function(dbactivities) {
      // We have access to the new activities as an argument inside of the callback function
      res.json(dbactivities);
    });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.user.create({
      name: req.body.name,
      email: req.body.email
    }).then(function(dbusers) {
      // We have access to the new users as an argument inside of the callback function
      res.json(dbusers);
      console.log(db.user);
    });
  });

  // GET route for getting all of the posts
  app.get("/api/posts/:postid", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activites.findAll({
      where: {
        post_id: req.params.postid
      }
    }).then(function(dbPosts) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbPosts);
    });
  });

  // PUT route for updating todos. We can get the updated post data from req.body
  app.put("/api/posts/:postid", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.activities.update({
      event_name: req.body.event_name,
      event_city: req.body.city,
      event_link: req.body.actLink,
      event_category: req.body.category,
      post_id: req.body.post_id
    }, {
      where: {
        post_id: req.params.postid
      }
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // PUT route for updating todos. We can get the updated post data from req.body
  app.put("/api/posts/:postid", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.activities.update({
      event_name: req.body.eventName,
      event_city: req.body.city,
      event_link: req.body.link,
      event_category: req.body.category,
      post_id: req.body.id
    }, {
      where: {
        post_id: req.body.id
      }
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // POST route for saving a new user
  app.post("/api/newpost", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.user.create({
      name: req.body.name,
      email: req.body.email
    }).then(function(dbusers) {
      // We have access to the new users as an argument inside of the callback function
      res.json(dbusers);
      console.log(db.user);
    });
  });

  // DELETE route for deleting post by id. We can get the id of the post to be deleted from
  app.delete("/api/posts/:postid", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.activities.destroy({
      where: {
        post_id: req.params.postid
      }
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });

  });

  // =======

  // POST route for saving a new user
  app.post("/api/interests", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.interest.create({
      user_id: req.body.user_id,
      user_interest: req.body.user_interest,
      interest_id: req.body.interest_id
    }).then(function(dbInterest) {
      // We have access to the new users as an argument inside of the callback function
      res.json(dbInterest);
    });
  });

  // GET route for getting all of the posts
  app.get("/api/interests/:user_id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.activites.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(dbInterest) {
      // We have access to the users as an argument inside of the callback function
      res.json(dbInterest);
    });
  });

  // PUT route for updating todos. We can get the updated post data from req.body
  app.put("/api/interests/:user_id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.interest.update({
      user_id: req.body.user_id,
      user_interest: req.body.user_interest,
    }, {
      where: {
        user_id: req.params.user_id
      }
    }).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });

  // DELETE route for deleting users. We can get the id of the post to be deleted from
  // req.params.id
  app.delete("/api/interest/:user_id/:interest_id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.activities.destroy({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(dbInterest) {
      res.json(dbInterest);
    });

  });

};

