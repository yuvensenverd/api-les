'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    jobtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    youtube: DataTypes.STRING,
    instagram: DataTypes.STRING,
    website: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    pictire: DataTypes.STRING,
    isDeleted: DataTypes.INTEGER
  }, {});
  Lecturer.associate = function(models) {
    // associations can be defined here
  };
  return Lecturer;
};