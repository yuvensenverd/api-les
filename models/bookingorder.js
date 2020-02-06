'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingOrder = sequelize.define('BookingOrder', {
    userId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    statusPembayaran: DataTypes.STRING,
    kode_order: DataTypes.INTEGER,
    schedule_list: DataTypes.TEXT,
    price_session: DataTypes.INTEGER,
    bundle_type: DataTypes.STRING
  }, {});
  BookingOrder.associate = function(models) {
    // associations can be defined here
    BookingOrder.belongsTo(models.User, { foreignKey: 'userId'})
    BookingOrder.belongsTo(models.Program, { foreignKey: 'programId'})
    BookingOrder.belongsTo(models.Location, {foreignKey: 'venueId'})
  };
  return BookingOrder;
};