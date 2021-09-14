'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Game_Biodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      noHp: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('User_Game_Biodata');
  }
};