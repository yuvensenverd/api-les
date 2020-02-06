'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('BookingOrders', 'price_session', {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Schedules', 'price_session');
  }
};
