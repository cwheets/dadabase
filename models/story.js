module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {

        story: DataTypes.TEXT

    });
  
    // Story.associate = function(models) {
    //   // Associating Story with Posts
    //   // When an Story is deleted, also delete any associated Posts
    //   Story.hasMany(models.Asks, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Story;
  };