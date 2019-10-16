module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
        title: DataTypes.STRING,
        story: DataTypes.TEXT

    });
  
    Story.associate = function(models) {
      // Associating Story with Posts
      // When an Story is deleted, also delete any associated Posts
      Story.belongsTo(models.User)
    };
  
    return Story;
  };