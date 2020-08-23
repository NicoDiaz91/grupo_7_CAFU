'use strict';
module.exports = (sequelize, DataTypes) => {

    const League = sequelize.define('Leagues', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
  }, {});
  League.associate = function(models) {
    League.hasMany(models.Products,{
      as: 'Products',
      foreignKey: 'League_id'
    });
  }
  return League;
}