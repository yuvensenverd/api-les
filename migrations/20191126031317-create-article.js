'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description : {
        type : Sequelize.TEXT
      },
      author: {
        type: Sequelize.STRING
      },
      articleDate : {
        type : Sequelize.DATE
      },
      banner : {
        type : Sequelize.STRING
      },
<<<<<<< HEAD
      ebook : {
        type : Sequelize.STRING
      },
=======
>>>>>>> parent of 7db4fb6... Merge remote-tracking branch 'origin/yuvens' into reza
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};