'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    username: DataTypes.STRING,
    room: DataTypes.INTEGER,
    row: DataTypes.INTEGER,
    column: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};