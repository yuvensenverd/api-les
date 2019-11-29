'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT, 
    author: DataTypes.STRING,
    articleDate : DataTypes.DATE
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    // Article.belongsTo(models.Category, { foreignKey : 'categoryId'})
    Article.belongsToMany(models.Category, {
      through: 'ArticleCategories',
      // as: 'orders',
      foreignKey: 'articleId',
      otherKey: 'categoryId'
    });
  };
  return Article;
};