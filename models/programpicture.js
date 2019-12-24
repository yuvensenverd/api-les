'use strict';
module.exports = (sequelize, DataTypes) => {
  const programpicture = sequelize.define('programpicture', {
    programId: DataTypes.INTEGER,
    imagePath: DataTypes.STRING
  }, {});
  programpicture.associate = function(models) {
    // associations can be defined here
  };
  return programpicture;
};