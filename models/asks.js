module.exports = function(sequelize, DataTypes) {
    var Asks = sequelize.define("Asks", {
      // Giving the Author model a name of type STRING
      questions: DataTypes.STRING,
      password: DataTypes.STRING,

    });
  
    // Asks.associate = function(models) {
    //   // Associating Asks with Posts
    //   // When an Asks is deleted, also delete any associated Posts
    //   Asks.hasOne(models.User, {
    //     onDelete: "cascade"
    //   });
    //   Asks.hasMany(models.Ask_comment, {
          
    //   })
    // };
  
    return Asks;
  };