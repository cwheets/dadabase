module.exports = function(sequelize, DataTypes) {
    var Jokes = sequelize.define("Jokes", {
      // Giving the Author model a name of type STRING
      joke: DataTypes.STRING,


    });
  
    Jokes.associate = function(models) {
      
      Jokes.belongsTo(models.User)

    };
  
    return Jokes;
  };