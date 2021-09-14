'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Game_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Game_History.belongsTo(models.User_Game, {
				foreignKey: "userGameId",
				onDelete: "CASCADE",
				as: "userGame"
			});
    }
  };
  User_Game_History.init({
    totalMatch: DataTypes.INTEGER,
    matchWon: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    userGameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Game_History',
    timestamps: false,
    freezeTableName: true,
  });
  return User_Game_History;
};