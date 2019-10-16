module.exports = function(sequelize, DataTypes) {
    var Asks = sequelize.define("Asks", {
      // Giving the Author model a name of type STRING
      questions: DataTypes.STRING,

    });
  
    Asks.associate = function(models) {
    
      Asks.belongsTo(models.User)
    };
  
    return Asks;
  };