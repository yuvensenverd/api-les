'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT, 
    author: DataTypes.STRING,
    articleDate : DataTypes.DATE,
    categoryId: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.Category, { foreignKey : 'categoryId'})
  };
  return Article;
};