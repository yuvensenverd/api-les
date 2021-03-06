'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};