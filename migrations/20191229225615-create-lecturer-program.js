'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LecturerPrograms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lecturerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lecturers',
          key:'id'
        }
      },
      programId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Programs',
          key:'id'
        }
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
    return queryInterface.dropTable('LecturerPrograms');
  }
};