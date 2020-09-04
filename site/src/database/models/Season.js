'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'seasons';

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
    tableName: 'seasons',
    timestamp: false
  };

  const seasons = sequelize.define(alias, cols, config);

  seasons.associate = function(models) {
    seasons.hasMany(models.products,{
      as: 'products',
      foreignKey: 'seasons_id'
    });
  };
  return seasons;
};