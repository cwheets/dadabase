const express = require('express');
var db = require("../models");

const askRouter = express.Router();



 
  askRouter.get("/ask", function(req, res) {
    db.Ask.findAll({}).then(function(dbAsk) {
      res.json(dbAsk);
    });
  });



  askRouter.delete("/ask/:id", function(req, res) {
    // Delete the Ask with the id available to us in req.params.id
    db.Ask.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAsk) {
      res.json(dbAsk)
    });
  });


  module.exports = askRouter;