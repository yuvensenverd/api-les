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
    isDeleted: DataTypes.INTEGER,
    classDate: DataTypes.STRING,
    slug: DataTypes.STRING,
  }, {});
  Program.associate = function(models) {
    // associations can be defined here
    Program.hasMany(models.programpicture, {foreignKey: 'programId'})
    Program.belongsToMany(models.Lecturer, {
      through: 'LecturerProgram',
      foreignKey: 'programId',
      otherKey: 'lecturerId'
    })
    Program.belongsTo(models.Location, { foreignKey: 'locationId'})
    Program.belongsTo(models.Room, { foreignKey: 'roomId'})
  };
  return Program;
};