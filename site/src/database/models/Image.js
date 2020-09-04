'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'images';

  let cols = {
        id:{
            type: DataTypes.INTEGER,
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
  
  images.associate = function (models){
    images.hasOne(models.users,{
      as: 'users',
      foreignKey: 'images_id'
    })
  };

  return images;
};