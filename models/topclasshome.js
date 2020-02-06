'use strict';
module.exports = (sequelize, DataTypes) => {
  const topClassHome = sequelize.define('topClassHome', {
    programId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  topClassHome.associate = function(models) {
    // associations can be defined here
    topClassHome.belongsTo(models.Program, { foreignKey: 'programId'})
  };
  return topClassHome;
};