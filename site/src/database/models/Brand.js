'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'brands';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  let config = {
    tableName: 'brands',
    timestamp: false
  };

  const brands = sequelize.define(alias, cols, config);

  brands.associate = function(models) {
    brands.hasMany(models.products,{
      as: 'products',
      foreignKey: 'brands_id'
    });
  };
  return brands;
};