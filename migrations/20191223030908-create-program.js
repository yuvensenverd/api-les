'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Programs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      hoster: {
        type: Sequelize.STRING
      },
      lecturerId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Lecturer',
        //   key: 'id',
        // }
      },
      pictureId: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      discountId: {
        type: Sequelize.INTEGER
      },
      quotaMax: {
        type: Sequelize.INTEGER
      },
      quotaMin: {
        type: Sequelize.INTEGER
      },
      slotTaken: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      classDescription: {
        type: Sequelize.TEXT
      },
      locationId: {
        type: Sequelize.INTEGER
      },
      roomId: {
        type: Sequelize.INTEGER
      },
      startDateRegister: {
        type: Sequelize.DATE
      },
      lastDateRegister: {
        type: Sequelize.DATE
      },
      minimalAge: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      classType: {
        type: Sequelize.STRING
      },
      priceInclusive: {
        type: Sequelize.TEXT
      },
      toPrepare: {
        type: Sequelize.TEXT
      },
      programOutome: {
        type: Sequelize.TEXT
      },
      pageView: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      isCancelled: {
        type: Sequelize.INTEGER
      },
      statusNote: {
        type: Sequelize.TEXT
      },
      isDeleted: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Programs');
  }
};