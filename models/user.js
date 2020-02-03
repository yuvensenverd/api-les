'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password : DataTypes.STRING,
    googleId: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    isVerified: DataTypes.INTEGER,
    role: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tanggalLahir: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    perusahaan: DataTypes.STRING,
    domisili: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.BookingOrder, {foreignKey: 'userId'})
  };
  return User;
};