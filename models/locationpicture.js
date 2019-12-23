'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocationPicture = sequelize.define('LocationPicture', {
    locationId: DataTypes.INTEGER,
    roomId : DataTypes.INTEGER,
    imagePath : DataTypes.STRING
  }, {}); 
  LocationPicture.associate = function(models) {
    // associations can be defined here
  };
  return LocationPicture;
};