var db = require("../models");
const bcrypt = require('bcrypt');
const express = require('express')
const authRoutes = express.Router()

  // Find all user and return them to the user with res.json
  authRoutes.get("/user", function(req, res) {

    db.User.findAll({}).then(function(dbUser) {

      res.json(dbUser);
    });
  });

  authRoutes.post('/user/register',function(req,res){
    console.log("test")
    db.User.create({

        username:req.body.username,
        password:req.body.password

    }).then(function(newUser){

        res.json(newUser);
    })

})

  authRoutes.post("/user/login", function(req, res) {
    
    db.User.findOne({
      where:{
          username: req.body.username

      }}).then(function(dbUser){
          //compares password send in req.body to one in database, will return true if matched.
      if(bcrypt.compareSync(req.body.password,dbUser.password)) {
          //create new session property "user", set equal to logged in user
          req.session.user = dbUser
      }
      else {
          //delete existing user, add error
          req.session.user = false;
          req.session.error = 'authorization failed'
      }
      res.json(req.session);
  })
  });
  
module.exports = authRoutes
