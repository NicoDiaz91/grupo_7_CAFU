'use strict';
module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define('Images', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};