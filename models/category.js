'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    // Category.hasOne(models.Article, {foreignKey : 'categoryId'})
    Category.belongsToMany(models.Article, {
      through: 'ArticleCategories',
      // as: 'categories',
      foreignKey: 'categoryId',
      otherKey: 'articleId'
    });
    // Category.hasMany(models.ArticleCategory, {foreignKey : 'categoryId'})
  };
  return Category;
};