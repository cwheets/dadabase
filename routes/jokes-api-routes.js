var db = require("../models");

module.exports = function(app) {
  // Find all jokes and return them to the user with res.json
  app.get("/api/jokes", function(req, res) {
    db.Jokes.findAll({}).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });

  app.get("/api/jokes/:id", function(req, res) {
    // Find one Jokes with the id in req.params.id and return them to the user with res.json
    db.Jokes.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });

  app.post("/api/jokes", function(req, res) {
    // Create an Jokes with the data available to us in req.body
    console.log(req.body);
    db.Jokes.create(req.body).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });

  app.delete("/api/jokes/:id", function(req, res) {
    // Delete the Jokes with the id available to us in req.params.id
    db.Jokes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbJokes) {
      res.json(dbJokes);
    });
  });
};