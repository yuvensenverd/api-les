'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomFacility = sequelize.define('RoomFacility', {
    roomId: DataTypes.INTEGER,
    facilityName : DataTypes.STRING
  }, {});
  RoomFacility.associate = function(models) {
    // associations can be defined here
    RoomFacility.belongsTo(models.Room, { foreignKey : 'roomId'})
  };
  return RoomFacility;
};