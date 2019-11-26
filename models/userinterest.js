'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInterest = sequelize.define('UserInterest', {
    email: DataTypes.STRING,
    subscribeList: DataTypes.STRING
  }, {});
  UserInterest.associate = function(models) {
    // associations can be defined here
  };
  return UserInterest;
};