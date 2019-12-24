'use strict';
module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    hoster: DataTypes.STRING,
    lecturerId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    discountId: DataTypes.INTEGER,
    quotaMax: DataTypes.INTEGER,
    quotaMin: DataTypes.INTEGER,
    slotTaken: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    classDescription: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    startDateRegister: DataTypes.DATE,
    lastDateRegister: DataTypes.DATE,
    minimalAge: DataTypes.INTEGER,
    level: DataTypes.STRING,
    language: DataTypes.STRING,
    classType: DataTypes.STRING,
    priceInclusive: DataTypes.STRING,
    toPrepare: DataTypes.STRING,
    programOutome: DataTypes.STRING,
    pageView: DataTypes.INTEGER,
    isCancelled: DataTypes.INTEGER,
    statusNote: DataTypes.STRING,
    isDeleted: DataTypes.INTEGER
  }, {});
  Program.associate = function(models) {
    // associations can be defined here
  };
  return Program;
};