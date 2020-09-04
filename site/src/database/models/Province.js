'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'provinces';

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
    },
    countrys_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  };

  let config = {
    tableName: 'provinces',
    timestamp: false
  }

  const provinces = sequelize.define(alias, cols, config);

  provinces.associate = function (models){
    provinces.belongsTo(models.countrys,{
      as: 'countrys',
      foreignKey: 'countrys_id'
    })
    provinces.hasMany(models.users, {
      as: 'users',
      foreignKey: 'provinces_id'
    })
  }
  return provinces;
};