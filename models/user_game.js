'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Game.hasMany(models.User_Game_Biodata, {
        foreignKey: 'userGameId',
        as: 'userGameBiodata'
      });

      User_Game.hasOne(models.User_Game_History, {
        foreignKey: 'userGameId',
        as: 'userGameHistory'
      });
    }
  };
  User_Game.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Game',
    timestamps: false,
    freezeTableName: true,
  });
  return User_Game;
};