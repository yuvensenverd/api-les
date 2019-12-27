'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    locationId: DataTypes.INTEGER,
    roomName: DataTypes.STRING,
    minCapacity: DataTypes.INTEGER,
    maxCapacity: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(models.Location, { foreignKey : 'locationId'})
    Room.hasMany(models.LocationPicture, {foreignKey : 'roomId'})
    Room.hasMany(models.RoomFacility, {foreignKey : 'roomId'})
  };
  return Room;
};