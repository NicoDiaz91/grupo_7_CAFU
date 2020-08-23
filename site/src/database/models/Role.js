'use strict';
module.exports = (sequelize, DataTypes) => {

    const Role = sequelize.define('Roles', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
    }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};