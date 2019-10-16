var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
         username: {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
          },
          password: {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }
        }
    });

    User.associate = function(models) {
        // add associations here
        // ex:User.hasMany(models.BlogPost);
        User.hasMany(models.Story)
        User.hasMany(models.Jokes)
    };
    //sequelize hook, will run before model instance is created and hash password
    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
    

    return User;
};