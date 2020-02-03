'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookingOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      programId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Programs',
          key: 'id'
        }
      },
      venueId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locations',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      statusPembayaran: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('BookingOrders');
  }
};