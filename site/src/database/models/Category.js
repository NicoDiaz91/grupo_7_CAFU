'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'categorys';

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
    tableName: 'categorys',
    timestamp: false
  };

  const categorys = sequelize.define(alias, cols, config);

  categorys.associate = function(models) {
    categorys.hasMany(models.products,{
      as: 'products',
      foreignKey: 'categorys_id'
    });
  };
  return categorys;
};