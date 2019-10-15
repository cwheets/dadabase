var db = require("../models");
const express = require("express")
const storyRoute = express.Router()


  // Find all story and return them to the user with res.json
  storyRoute.get("/api/story", function(req, res) {
    db.Story.findAll({}).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  storyRoute.get("/api/story/:id", function(req, res) {
    // Find one Story with the id in req.params.id and return them to the user with res.json
    db.Story.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  storyRoute.post("/api/story", function(req, res) {
    // Create an Story with the data available to us in req.body
    console.log(req.body);
    db.Story.create(req.body).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  storyRoute.delete("/api/story/:id", function(req, res) {
    // Delete the Story with the id available to us in req.params.id
    db.Story.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStory) {
      res.json(dbStory);
    });
  });


module.exports = storyRoute