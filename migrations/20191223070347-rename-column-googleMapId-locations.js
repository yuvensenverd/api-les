'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return [
     await queryInterface.changeColumn('locations', 'googleMapEmbed', { 
      type: Sequelize.TEXT
     }),
     await queryInterface.changeColumn('locations', 'googleMapName',{
      type: Sequelize.TEXT
     }),
     await queryInterface.changeColumn('locations', 'description',{
      type: Sequelize.TEXT
     })
   ];

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
