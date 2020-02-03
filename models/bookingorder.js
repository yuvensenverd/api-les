'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingOrder = sequelize.define('BookingOrder', {
    userId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    statusPembayaran: DataTypes.STRING
  }, {});
  BookingOrder.associate = function(models) {
    // associations can be defined here
    BookingOrder.belongsTo(models.User, { foreignKey: 'userId'})
    BookingOrder.belongsTo(models.Program, { foreignKey: 'programId'})
    BookingOrder.belongsTo(models.Location, {foreignKey: 'venueId'})
  };
  return BookingOrder;
};