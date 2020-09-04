'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'roles';

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
    tableName: 'roles',
    timestamp: false
  }

  const roles = sequelize.define(alias, cols, config);

  roles.associate = function(models) {
    roles.hasOne(models.users, {
      as: 'users',
      foreignKey: 'roles_id'
    })

  };
  return roles;
};