'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Game_Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Game_Biodata.belongsTo(models.User_Game, {
				foreignKey: "userGameId",
				onDelete: "CASCADE",
				as: "userGame"
			});
    }
  };
  User_Game_Biodata.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    noHp: DataTypes.STRING,
    profession: DataTypes.STRING,
    country: DataTypes.STRING,
    image: DataTypes.STRING,
    bio: DataTypes.STRING,
    userGameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Game_Biodata',
    timestamps: false,
    freezeTableName: true,
  });
  return User_Game_Biodata;
};