'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    website : DataTypes.STRING,
    phone : DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    address : DataTypes.STRING,
    googleMapName : DataTypes.STRING,
    googleMapEmbed : DataTypes.INTEGER,
    description : DataTypes.STRING,
    slug : DataTypes.STRING,
    isVisibility: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(models.Program, {foreignKey: 'locationId'})
    Location.hasMany(models.LocationPicture, {foreignKey : 'locationId'})
    Location.hasMany(models.Room, {foreignKey : 'locationId'})
    Location.hasMany(models.BookingOrder, { foreignKey: 'vanueId'})
    // Location.hasOne(models.Program, {foreignKey: 'locationId'})
  };
  return Location;
};