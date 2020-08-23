'use strict';
module.exports = (sequelize, DataTypes) => {

    const Country = sequelize.define('Countrys', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
    }, {});
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};