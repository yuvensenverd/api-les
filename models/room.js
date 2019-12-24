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
  };
  return Room;
};