'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'images';

  let cols = {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
  };

  let config = {
    tableName: 'images',
    timestamp: false
  };

  const images = sequelize.define(alias, cols, config);
  

  return images;
};