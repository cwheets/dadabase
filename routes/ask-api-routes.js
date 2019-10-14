var db = require("../models");

module.exports = function(app) {
  // Find all ask and return them to the user with res.json
  app.get("/api/ask", function(req, res) {
    db.Ask.findAll({}).then(function(dbAsk) {
      res.json(dbAsk);
    });
  });

  app.get("/api/ask/:id", function(req, res) {
    // Find one Ask with the id in req.params.id and return them to the user with res.json
    db.Ask.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAsk) {
      res.json(dbAsk);
    });
  });

  app.post("/api/ask", function(req, res) {
    // Create an Ask with the data available to us in req.body
    console.log(req.body);
    db.Ask.create(req.body).then(function(dbAsk) {
      res.json(dbAsk);
    });
  });

  app.delete("/api/ask/:id", function(req, res) {
    // Delete the Ask with the id available to us in req.params.id
    db.Ask.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAsk) {
      res.json(dbAsk);
    });
  });
};