var express = require("express");

var session = require("express-session");

require('dotenv').config();

var db = require("./models");

const askRouter = require('./routes/ask-api-routes');

const jokesRouter = require("./routes/jokes-api-routes")

const storyRouter = require("./routes/story-api-routes")

const authRouter = require("./routes/user-api-routes")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("assets"));


app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use('/api', askRouter)
app.use('/api', jokesRouter)
app.use('/api', storyRouter)
app.use('/auth', authRouter)



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});