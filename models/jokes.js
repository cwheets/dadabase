module.exports = function(sequelize, DataTypes) {
    var Jokes = sequelize.define("Jokes", {
      // Giving the Author model a name of type STRING
      joke: DataTypes.STRING

    });
  
    // Jokes.associate = function(models) {
    //   // Associating Jokes with Posts
    //   // When an Jokes is deleted, also delete any associated Posts
    //   Jokes.hasOne(models.User, {
    //     onDelete: "cascade"
    //   });
    //   Jokes.hasMany(models.Ask_comment, {
          
    //   })
    // };
  
    return Jokes;
  };