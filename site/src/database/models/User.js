'use strict';
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('Users', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: DataTypes.STRING,
        },
        lastName:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING,
        },
        image_id: {
            type: DataTypes.INTEGER,
        },
        role_id: {
            type: DataTypes.INTEGER,
        },
        country_id: {
            type: DataTypes.INTEGER,
        },
        province_id: {
            type: DataTypes.INTEGER,
        }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return User;
};