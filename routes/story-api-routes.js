var db = require("../models");
const express = require("express")
const storyRoute = express.Router()


  // Find all story and return them to the user with res.json
  storyRoute.get("/story", function(req, res) {
    db.Story.findAll({include:[db.User]}).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  storyRoute.get("/story/:id", function(req, res) {
    // Find one Story with the id in req.params.id and return them to the user with res.json
    db.Story.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  storyRoute.post("/story", function(req, res) {
    // Create an Story with the data available to us in req.body
    if(!req.session.user){
      // res.redirect("/auth/login")
      res.send("you must login to post!")
    }
    else{
      db.Story.create({
        title:req.body.title,
        story:req.body.story,
        UserId:req.session.user.id

      }).then(function(dbStory) {
        res.json(dbStory);
      });
    }
  });

  storyRoute.delete("/story/:id", function(req, res) {
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