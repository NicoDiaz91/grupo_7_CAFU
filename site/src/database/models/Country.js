'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'countrys';

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
    tableName: 'countrys',
    timestamp: false
  }

  const countrys = sequelize.define(alias, cols, config);

  countrys.associate = function(models) {
    countrys.hasMany(models.users, {
      as:'users',
      foreignKey: 'countrys_id'
    })
    countrys.hasMany(models.provinces,{
      as: 'provinces',
      foreignKey: 'countrys_id'
    })
  };

  return countrys;
};