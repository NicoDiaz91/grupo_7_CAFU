'use strict';
module.exports = (sequelize, DataTypes) => {

    const Province = sequelize.define('Provinces', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
    }, {});
  Province.associate = function(models) {
    // associations can be defined here
  };
  return Province;
};