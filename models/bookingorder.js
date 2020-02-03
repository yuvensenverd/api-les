'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingOrder = sequelize.define('BookingOrder', {
    userId: DataTypes.INTEGER
  }, {});
  BookingOrder.associate = function(models) {
    // associations can be defined here
  };
  return BookingOrder;
};