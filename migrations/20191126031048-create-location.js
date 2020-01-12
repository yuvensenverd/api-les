'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull : false,
        type: Sequelize.STRING
      },
      website : {
        allowNull : true,
        type : Sequelize.STRING
      },
      phone : {
        allowNull : false,
        type : Sequelize.STRING
      },
      address: {
        allowNull : false,
        type: Sequelize.STRING
      },
      googleMapName: {
        allowNull : false,
        type: Sequelize.STRING
      },
      googleMapId: {
        allowNull : true,
        type: Sequelize.INTEGER
      },
      description : {
        allowNull : false,
        type : Sequelize.TEXT
      },
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
    return queryInterface.dropTable('Locations');
  }
};