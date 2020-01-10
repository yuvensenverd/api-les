'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    programId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
    Schedule.belongsTo(models.Program,{foreignKey: 'programId'})
  };
  return Schedule;
};