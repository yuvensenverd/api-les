'use strict';
module.exports = (sequelize, DataTypes) => {
  const topClassHome = sequelize.define('topClassHome', {
    programId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  topClassHome.associate = function(models) {
    // associations can be defined here
  };
  return topClassHome;
};