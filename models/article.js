'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT, 
    author: DataTypes.STRING,
    articleDate : DataTypes.DATE,
    banner : DataTypes.STRING,
    ebook : DataTypes.STRING,
    slug: DataTypes.STRING,
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    // Article.belongsTo(models.Category, { foreignKey : 'categoryId'})
    Article.belongsToMany(models.Category, {
      through: 'ArticleCategories',
      // as: 'articles',
      foreignKey: 'articleId',
      otherKey: 'categoryId'
    });
    // Article.hasMany(models.ArticleCategory, {foreignKey : 'articleId'})
  };
  return Article;
};