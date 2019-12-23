'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    website : DataTypes.STRING,
    phone : DataTypes.STRING,
    address : DataTypes.STRING,
    googleMapName : DataTypes.STRING,
    googleMapId : DataTypes.INTEGER,
    description : DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};