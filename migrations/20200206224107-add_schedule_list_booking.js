'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('BookingOrders', 'schedule_list', {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('BookingOrders', 'schedule_list', {
      type: Sequelize.TEXT,
    });
  }
};
