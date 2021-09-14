'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Game_History', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalMatch: {
        type: Sequelize.INTEGER
      },
      matchWon: {
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.INTEGER
      },
      userGameId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: 'User_Game',
          key: 'id', 
          as: 'userGameId'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_Game_History');
  }
};