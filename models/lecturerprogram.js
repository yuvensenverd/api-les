'use strict';
module.exports = (sequelize, DataTypes) => {
  const LecturerProgram = sequelize.define('LecturerProgram', {
    lecturerId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER
  }, {});
  LecturerProgram.associate = function(models) {
    // associations can be defined here
  };
  return LecturerProgram;
};