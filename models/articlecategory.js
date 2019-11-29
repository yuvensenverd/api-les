'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleCategory = sequelize.define('ArticleCategory', {
    articleId: DataTypes.INTEGER,
    categoryId : DataTypes.INTEGER,
  }, {});
  ArticleCategory.associate = function(models) {
    // associations can be defined here
    // ArticleCategory.belongsTo(models.Category, {foreignKey : 'categoryId'})
    // ArticleCategory.belongsTo(models.Article, {foreignKey : 'articleId'})
  };
  return ArticleCategory;
};