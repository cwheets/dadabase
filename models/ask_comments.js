module.exports = function(sequelize, DataTypes) {
    var Ask_comments = sequelize.define("Ask_comments", {
      // Giving the Author model a name of type STRING
      comment: DataTypes.STRING

    });
  
    // Ask_comments.associate = function(models) {
    //   // Associating Ask_comments with Posts
    //   // When an Ask_comments is deleted, also delete any associated Posts
    //   Ask_comments.hasMany(models.Asks, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Ask_comments;
  };