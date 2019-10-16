var db = require("../models");
const express = require('express')

const jokeRouter = express.Router()

  jokeRouter.get("/jokes", function(req, res) {
    db.Jokes.findAll({}).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });

  jokeRouter.get("/jokes/:id", function(req, res) {
    // Find one Jokes with the id in req.params.id and return them to the user with res.json
    db.Jokes.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });

  jokeRouter.post("/jokes", function(req, res) {
    // Create an Jokes with the data available to us in req.body
    db.Jokes.create(req.body).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });

  jokeRouter.delete("/jokes/:id", function(req, res) {
    // Delete the Jokes with the id available to us in req.params.id
    db.Jokes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });


module.exports = jokeRouter