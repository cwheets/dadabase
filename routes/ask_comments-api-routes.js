var db = require("../models");

module.exports = function(app) {
  // Find all ask_comments and return them to the user with res.json
  app.get("/api/ask_comments", function(req, res) {
    db.Ask_comments.findAll({}).then(function(dbAsk_comments) {
      res.json(dbAsk_comments);
    });
  });

  app.get("/api/ask_comments/:id", function(req, res) {
    // Find one Ask_comments with the id in req.params.id and return them to the user with res.json
    db.Ask_comments.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAsk_comments) {
      res.json(dbAsk_comments);
    });
  });

  app.post("/api/ask_comments", function(req, res) {
    // Create an Ask_comments with the data available to us in req.body
    console.log(req.body);
    db.Ask_comments.create(req.body).then(function(dbAsk_comments) {
      res.json(dbAsk_comments);
    });
  });

  app.delete("/api/ask_comments/:id", function(req, res) {
    // Delete the Ask_comments with the id available to us in req.params.id
    db.Ask_comments.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAsk_comments) {
      res.json(dbAsk_comments);
    });
  });
};